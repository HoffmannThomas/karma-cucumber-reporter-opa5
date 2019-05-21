'use strict';

var formatter = require('./formatter');
var writer = require('./writer');

var CucumberReporter = function(baseReporterDecorator, config, logger, helper) {
    var log = logger.create('reporter.cucumber-opa5');
    var reporterConfig = config.cucumberReporterOPA5 || {};
    var out = reporterConfig.out || 'stdout';
    var history = {};

    baseReporterDecorator(this);

    this.adapters = [function(msg) {
        process.stdout.write.bind(process.stdout)(msg);
    }];

    this.onSpecComplete = function(browser, result) {

        var suite = result.suite[0];
        var scenario = result.suite[1];

        history[suite] = history[suite] || {};
        history[suite][scenario] = history[suite][scenario] || [];
        history[suite][scenario].push(result);
    };

    this.onRunComplete = function() {
        var cucumberJson = formatter(history);
        var jsonResult = JSON.stringify(cucumberJson, null, 2) + '\n';

        if (out === 'stdout') {
            process.stdout.write(jsonResult);
        } else {
            writer(helper, out, log, jsonResult);
        }
    };
};

CucumberReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
    'reporter:cucumber-opa5': ['type', CucumberReporter]
};