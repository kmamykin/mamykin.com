// https://www.doxiq.com/posts/Hacking-Lead-Generation-How-doxIQ-built-a-lightweight-but-effective-marketing-stack/
// http://keetology.com/blog/rebuilding-keetology
// https://github.com/christophercliff/christophercliff.github.io/blob/supermaster/build.js
// https://github.com/X1011/git-directory-deploy
// https://webxcerpt.github.io/openCPQ/blog-posts/2015-05-21-website-toolchain.html

var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
//var metadata = require('metalsmith-metadata');
var templates = require('metalsmith-templates');

Metalsmith(__dirname)
  .use(markdown({
    smartypants: true,
    smartLists: true,
  }))
  .use(templates('handlebars'))
  .build(function (err) {
    if (err) return console.error(err);
    console.log("Build completed")
  });
