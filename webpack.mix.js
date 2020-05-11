let mix = require("laravel-mix");

// JS optimization and concatenation process
mix
  .browserSync("dscerts.sitelab.io")
  .js("src/js/app.js", "dist/")
  // Run JS through Babel for max browser compat
  .babel("dist/app.js", "dist/app.js")
  // Minify final result
  .minify("dist/app.js")
  // Set public path
  .setPublicPath("dist");

// CSS optimization and concatenation process
mix
  .sass("src/scss/app.scss", "dist/")
  // Minify final result
  .minify("dist/app.css")
  // Set public path
  .setPublicPath("dist");
// sync browser
