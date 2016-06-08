# meteor-webshot 0.0.4

##### Uses node-webshot 0.17.0: https://github.com/brenden/node-webshot


####  App Installation:

```sh
meteor add charcolios:webshot
```

####  Package Installation:

```sh
api.use('charcolios:webshot@0.0.4', 'server');
```

####  Usage:
```sh
var webshot = Meteor.webshotPackage();
var fs      = Npm.require('fs');
var Future  = Npm.require('fibers/future');
var fut     = new Future();

var options = {
    "paperSize": {
        "format": "Letter",
        "orientation": "portrait",
        "margin": "1cm"
    },
    siteType: 'html'
};
webshot(html_string, fileName, options, function(err) {
    if(err) {
        fut.throw(err);
        return;
    }
    fs.readFile(fileName, function (err2, data) {
        if (err2) {
            fut.throw(err2);
            return;
        }
        fut.return(data);
    });
});
var pdfData = fut.wait();
```
