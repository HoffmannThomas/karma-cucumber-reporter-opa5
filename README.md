# Karma Cucumber Reporter

Transforms Karma UI5 Gherkin test output to Cucumber format which can be postprocessed by [cucumber-reporting](https://github.com/damianszczepanik/cucumber-reporting).

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
