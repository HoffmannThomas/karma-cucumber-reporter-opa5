'use strict';

module.exports = function(history) {
    var cucumberJson = [];

    console.log(JSON.stringify(history));

    Object.keys(history).forEach(featureKey => {

        var scenarios = history[featureKey];

        var elements = [];

        scenarios.forEach(scenario => {

            elements.push({
                name: scenario.description,
                type: 'scenario',
                keyword: 'Scenario',
                steps: []
            });
        });

        cucumberJson.push({
            keyword: 'Feature',
            name: featureKey,
            uri: featureKey,
            tags: [{
                name: tag
            }],
            elements: elements
        });
    });

    return cucumberJson;
};