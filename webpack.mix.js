const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/module/home.js', 'public/js')
    .js('resources/js/module/contacts.js', 'public/js')
    .sass('resources/sass/view/home.scss', 'public/css')
    .sass('resources/sass/view/contacts.scss', 'public/css')
    .sass('resources/sass/theme.scss', 'public/css');

if (mix.inProduction()) {
    mix.version();
}else {
    mix.browserSync({
        proxy: 'localhost:8000'
    });
}