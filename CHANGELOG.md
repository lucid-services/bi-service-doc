# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).


## v2.1.4

* [FIXED] servers variables in generated OpenAPI specs should include non-standard server port as part of server host variable

## v2.1.3

* [FIXED] servers variables in generated OpenAPI specs should include non-standard server port as part of server host variable

## v2.1.2

* [FIXED] rename project from `bi-service-doc` to `serviser-doc`

## v2.1.1

* [FIXED] fix tests

## v2.1.0

* [FIXED] update `json-schema-faker`
* [FIXED] update frontend `redoc` package
* [ADDED] hookup `fakerjs` package to `json-schema-faker` so its possible to define more accurate code examples

## v2.0.5

* [FIXED] `Redoc` upgraded to `2.0.0-alpha.38`
* [FIXED] documentation updates

## v2.0.4

* [FIXED] dont consider http application base path a candidate for operation tags - aka. the base url path the http application is running at should be excluded from http operation endpoint
* [FIXED] include custom `x-app` (application name) property in generated OpenAPI specification info object

## v2.0.3

* [FIXED] Doc http app should not abort its initialization when generation of route `x-code-samples` fails. The failure should be handled gracefully.
* [FIXED] consider custom json-schema `media-type` format (which bi-service introduced in `v1.6.2`) when generating `x-code-samples`

## v2.0.2

* [FIXED] semantic error - was trying to access a property path which might not exist while generating `x-code-samples`

## v2.0.1

* [FIXED] json-schema-faker was being given incorrect property schema value

## v2.0.0

* [CHANGED] replaced `swagger-ui` fronted with `ReDoc` modern frontend created with React
* [CHANGED] upgraded to specification `OpenAPI v3.0.0`
* [ADDED] `readme` configuration section which allows to append additional hand-written documentation to the begining of generated API documentation
* [ADDED] OpenAPI `x-code-samples` generation for `JavaScript` & `Curl`

## v1.1.3

* [FIXED] previous broken release

## v1.1.2

* [FIXED] previous broken release

## v1.1.1

* [FIXED] `path` url portion of `baseUrl` should remain as a part of base url and NOT be extracted out to individual relative endpoint urls.

## v1.1.0

* [ADDED] front-end: searchbox for filtering API operations
* [ADDED] front-end: basic support for `patternProperties` schema keyword
* [FIXED] front-end: BASE URL should contain host
* [FIXED] front-end: url link now dynamically changes when we switch to different API version so the URL dirrectly link to the API version we are currently at

## v1.0.0

* [FIXED] updated bi-service private API calls to conform with the new `bi-service@1.0.0` release

## v1.0.0-beta.6

* [FIXED] throw proper error with useful error message when no validator with a specified identifier is not found

## v1.0.0-beta.5

* [FIXED] generated JSON specification should include valid list of supported schemes (protocols)

## v1.0.0-beta.4

* [ADDED] support for AMQP route specs generation

## v1.0.0-beta.3

* [FIXED] - missing front-end image files
* [FIXED] - updated front-end scripts & css styles
* [FIXED] - compatibility with upcomming bi-service@1.0.0 - regarding common `App` interface
* [DEPRECATED] - `sdkMethodName` property - `x-sdkMethodName` should be used instead

## v1.0.0-beta.2

* [FIXED] - swagger root options `host` & `basePath` were being incorrectly assembled when an app's `baseUrl` included path endpoint in addition to protocol + host

## v1.0.0-beta

* [ADDED] - GET api/v1.0/specs/:version endpoint

## v1.0.0-alpha.4

* [FIXED] - `ajv2swagger` package has been renamed to `bi-ajv2swagger`

## v1.0.0-alpha.3

* [FIXED] - `bi-config` related failure when `bi-service-doc` package is installed globally (project's local `bi-config` package must be used rather the global module)

## v1.0.0-alpha.2

* [FIXED] - `bi-config` initialization should happen before a service module is loaded

## v1.0.0-alpha

[CHANGED] - requires `bi-service` >= `1.0.0-alpha` which dropped support for json-inspector and replaced it with ajv validator

## v0.9.5

[FIXED] - use bi-config's public interface rather than hacking around its internal (which was necessary in earlier versions)
[FIXED] - generated swagger json spec should not contain duplicate parameter names in Array collections

## v0.9.4

[FIXED] - correct npm project (module) name was not being coerced (thus the shell executable failed to generated JSON specs)
[FIXED] - `AppManager.buildDoc` should emit `build-app` event

## v0.9.3

[FIXED] - set default express bodyParser options

## v0.9.2

[FIXED] - allow to generate docs for all apps including CLIs & Docs (not just dirrect instances of App)

## v0.9.1

[FIXED] - `host` property of generated swagger json should NOT include a protocol
[FIXED] - req parameter duplicates should be filtered out out of swagger json specs

## v0.9.0

[CHANGED] - minimum required dependency of `bi-service@0.15.0`

## v0.8.3

[FIXED] - cli - a failure with projects which contain symlinked dependencies
[FIXED] - cli - misleading & incorrect error was being presented to an user when any module (file) other than the main app entry file was not found

## v0.8.2

[FIXED] - global variable leak - caused overwritings generated swagger specs object for bi-service apps

## v0.8.1

[FIXED] - It should be ensured that all parameters which are part of an url, are described (should be included in `parameters` array)

## v0.8.0

[ADDED] - dynamic url path segments sorting - ensures the swagger json output is deterministic in that regard
[ADDED] - `bi-service-doc` shell script
[ADDED] - custom `sdkMethodName` to swagger schema
[CHANGED] - the API this module exports to an user has been changed. A `Doc` app is no longer direct instance of `App` but rather `Doc` (expected to be compatible with `bi-service` >0.10.x)

## v0.7.1

[FIXED] - failure when building inplace validator schema in form of a function

## v0.7.0

[ADDED] - request "header" parameters support
[CHANGED] - route response descriptors come in form of an array for each response code since bi-service@0.10.x, the array is merged into one response schema. This allows a route to describe multiple "variations" of same error response (eg. all api codes the route responds with).
[FIXED] - don't overwrite default `json-inspector` options as they should be same as for request parameters validators
[FIXED] - the module requires `bi-service@0.10.0` or higher

## v0.6.4

[FIXED] - missing support for `function` schema definition & schema references. Response schemas share common context with request validator definitions.

## v0.6.3

[FIXED] - swagger specification inconsistencies
[FIXED] - `additionalProperties` of object were not being rendered for response bodies

## v0.6.2

[FIXED] - undeclared variables

## v0.6.1

[CHANGED] - rename the module from `bi-docs` to `bi-service-doc`

## v0.6.0

[ADDED] - makes from this module a plugin which registers itself ones required to the application (since `bi-service@0.9.0`)

## 0.5.4

[FIXED] - filter out regex pattern in express url segments Eg: /url/:id(\d+) => /url/:id

## 0.5.3

[FIXED] - bugs in validator build logic causing the swagger schema build process to fail completely
[FIXED] - incorrect url tagging algorithm
[REMOVED] - unused `semver` module

## 0.5.2

[FIXED] - swagger schema was being builded too soon as not all valdators were not registered yet

## 0.5.1

[FIXED] - incorrect nonexistent module `json-inspector` required instead of `bi-json-inspector`

## 0.5.0

[ADDED] - first "stable" release
