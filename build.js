// https://www.doxiq.com/posts/Hacking-Lead-Generation-How-doxIQ-built-a-lightweight-but-effective-marketing-stack/
// http://keetology.com/blog/rebuilding-keetology
// https://github.com/christophercliff/christophercliff.github.io/blob/supermaster/build.js
// https://github.com/X1011/git-directory-deploy
// https://webxcerpt.github.io/openCPQ/blog-posts/2015-05-21-website-toolchain.html

var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

var isServer = false;

process.argv.forEach(function (val) {
  if (val === 'server') isServer = true
});

if (isServer) {
  build().use(watch({
    paths: {
      "${source}/**/*": true,
      "layouts/**/*": "**/*.md"
    },
    livereload: false
  })).use(serve({
    port: 8081,
    verbose: true
  })).build(function (err) {
    if (err) throw err;
    console.log("Watching and Serving")
  });
} else {
  build().build(function (err) {
    if (err) throw err;
    console.log("Build completed")
  });
}

function build () {
  return Metalsmith(__dirname)
    .use(markdown({
      smartypants: true,
      smartLists: true,
    }))
    .use(layouts({
      engine: 'handlebars',
      default: 'site.hbt'
    }))
}
