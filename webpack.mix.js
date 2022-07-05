const mix = require("laravel-mix");

mix.setPublicPath("../server/public")
    .js("src/app.js", "app.js")
    .vue({version: 3})
    .sass("src/scss/styles.scss", "styles.css")
    .copy("static/index.html", "../server/public/index.html");
