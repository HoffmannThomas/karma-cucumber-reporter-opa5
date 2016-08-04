'use strict';

var path = require('path');
var fs = require('fs');


module.exports = function (out, jsonResult) {
    helper.mkdirIfNotExists(path.dirname(out), function () {
        fs.writeFile(out, jsonResult, function (err) {
            if (err) {
                log.error('Cannot write JSON\n\t' + err.message);
            } else {
                log.info('JSON written to %s', out);
            }
        });
    });
}
