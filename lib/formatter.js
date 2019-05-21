'use strict';

module.exports = function(history) {
    var cucumberJson = [];

    Object.keys(history).forEach(suiteKey => {

        var suite = history[suiteKey];

        Object.keys(suite).forEach(featureKey => {

            var scenarios = suite[featureKey]

            var elements = [];

            scenarios.forEach(scenario => {

                var steps = [];
                var scenarioTags = [];

                steps.push({
                    keyword: '',
                    name: scenario.description,
                    result: {
                        name: scenario.description,
                        duration: scenario.time * 1000000,
                        status: scenario.success ? 'passed' : 'failed'
                    }
                })

                scenarioTags.push({
                    name: scenario.description.split(' ')[0]
                });

                elements.push({
                    name: scenario.description,
                    type: 'scenario',
                    keyword: 'Scenario',
                    tags: scenarioTags,
                    steps: steps
                });
            });

            var featureTags = [];

            cucumberJson.push({
                keyword: 'Feature',
                name: featureKey,
                uri: featureKey,
                tags: featureTags,
                elements: elements
            });

        });
    });

    return cucumberJson;
};