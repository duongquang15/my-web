const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue()  // Thêm dòng này để hỗ trợ Vue
   .postCss('resources/css/app.css', 'public/css', [
       require('postcss-import'),
       require('tailwindcss'),
       require('autoprefixer'),
   ]);