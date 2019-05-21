# Karma Cucumber Reporter

Transforms Karma UI5 Gherkin test output to Cucumber format which can be postprocessed by [cucumber-reporting](https://github.com/damianszczepanik/cucumber-reporting).

Currently takes in the raw suite result:
```
{
	"description": "Scenario: Click a button, save a life!",
	"suite": ["/base/test/testsuite.qunit.html", "Feature: Clicking Buttons Is a Life Saving Activity"],
	"success": true,
	"log": [],
	"time": 1379
}
```

and creates a cucumber output like:
```
[{
		"keyword": "Feature",
		"name": "Feature: Clicking Buttons Is a Life Saving Activity",
		"uri": "Feature: Clicking Buttons Is a Life Saving Activity",
		"tags": [],
		"elements": [{
				"name": "Scenario: Click a button, save a life!",
				"type": "scenario",
				"keyword": "Scenario",
				"tags": [{
						"name": "Scenario:"
					}
				],
				"steps": [{
						"keyword": "",
						"name": "Scenario: Click a button, save a life!",
						"result": {
							"name": "Scenario: Click a button, save a life!",
							"duration": 1379000000,
							"status": "passed"
						}
					}
				]
			}

		]
	}
]
```
## Configuration

```
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['cucumber-opa5']
  });
};
```

## Options

### out

**Type:** String

File location to write to. Defaults to `stdout` if not present.

```
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['cucumber-opa5'],
    cucumberReporter: {
      out: './test/results/cucumber.json'
    }
  });
};
```
