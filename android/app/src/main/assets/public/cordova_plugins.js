
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
          "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
          "pluginId": "cordova-plugin-document-viewer",
        "clobbers": [
          "cordova.plugins.SitewaertsDocumentViewer",
          "SitewaertsDocumentViewer"
        ]
        },
      {
          "id": "cordova-plugin-x-socialsharing.SocialSharing",
          "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
          "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
        },
      {
          "id": "cordova-plugin-preview-any-file.PreviewAnyFile",
          "file": "plugins/cordova-plugin-preview-any-file/www/preview.js",
          "pluginId": "cordova-plugin-preview-any-file",
        "clobbers": [
          "window.PreviewAnyFile"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-document-viewer": "1.0.0",
      "cordova-plugin-preview-any-file": "0.2.7",
      "cordova-plugin-x-socialsharing": "6.0.3"
    };
    // BOTTOM OF METADATA
    });
    