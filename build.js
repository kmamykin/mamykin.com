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
