let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

// Shhh
mix.disableSuccessNotifications();

// Browser-Sync
mix.browserSync({
  injectChanges: true,
  files: ['./src/**/*'],
  proxy: 'mej.test'
});

// SCSS + Tailwind
mix
  .sass('./src/assets/scss/main.scss', './dist/assets/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })

// JS + Babel
mix
  .babel('./src/assets/js/main.js', './dist/assets/js/main.js')

// Copy HTML
mix
  .copy('./src/index.html', 'dist')

// Copy Images
mix
  .copy('./src/assets/images/**/*', 'dist/assets/images/')
