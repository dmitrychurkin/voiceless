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

mix
    // .sass('resources/sass/view/home.scss', 'public/css')
    // .sass('resources/sass/view/contacts.scss', 'public/css')
    // .sass('resources/sass/theme.scss', 'public/css')
    // .js('resources/js/module/home.js', 'public/js')
    // .js('resources/js/module/contacts.js', 'public/js')
    .react('resources/js/module/admin/index.jsx', 'public/js/admin.js');

if (mix.inProduction()) {
    mix.version();
}else {
    mix.browserSync({
        proxy: 'localhost:8000'
    });
}