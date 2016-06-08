Package.describe({
  name: 'charcolios:webshot',
  version: '0.0.4',
  summary: 'node-webshot version 0.17.0',
  git: 'https://github.com/Charcolios/meteor-webshot',
  documentation: "README.md"
});

Npm.depends({
  "webshot": "0.17.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('webshot.js', [ 'server' ]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('charcolios:webshot');
  api.addFiles('webshot-tests.js');
});
