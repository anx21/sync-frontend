/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/picnic/releases/plugins.min.css');
  app.import('bower_components/picnic/releases/picnic.min.css')

  return app.toTree();
};
