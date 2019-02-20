[![Build Status](https://travis-ci.com/GeekHijabi/Random-phone-number-generator.svg?token=GGygmjpzKNRcVHksympF&branch=develop)](https://travis-ci.com/GeekHijabi/Random-phone-number-generator)
[![Coverage Status](https://coveralls.io/repos/github/GeekHijabi/Random-phone-number-generator/badge.svg?branch=develop)](https://coveralls.io/github/GeekHijabi/Random-phone-number-generator?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/46f70badc83df2471c77/maintainability)](https://codeclimate.com/github/GeekHijabi/Random-phone-number-generator/maintainability)

Random Phone Number Generator
------------------------------
Random Phone Number Generator is a web app for a telecommunications company to generate 10 digits numbers randomly.

## Explore app at:
---
* Coming soon


## Technologies
-------------------
* Nodejs: a JavaScript runtime built on Chrome's V8 JavaScript engine.
* Mocha: a feature-rich JavaScript test framework running on Node.js
* Chai: a BDD / TDD assertion library for node and the browser that can be paired with any javascript testing framework.
* Eslint: provides a pluggable linting utility for JavaScript
* Travis CI: a hosted continuous integration and delivery service for GitHub projects.
* Express js: handles backend routing.
* Coveralls: shows the parts of code that are not covered by test suites.
* Postman: a powerful HTTP client for testing web services.
* Angular: a a TypeScript-based open-source full-stack web application framework.


## Installations
-------------------
* Make sure to have nodeJs installed.
* Clone the repository `git clone https://github.com/GeekHijabi/Random-phone-number-generator`
* Navigate to directory.
* Install all required dependencies with `npm install`.
* Run `npm start` to start the frontend application and `npm run start-server` to get the server started.

### Website Functionality
There are two major functionalities of the app:
  * Generate random 10 digits phone numbers.
  * Get all generated phone numbers.
Other sub functionalities exists such as:
  * Get total number of generated phone numbers.
  * Get the maximum phone numbers generated.
  * Get the minimum phone numbers generated.

## Test
---
* For backend test, run `npm test`
* For frontend test, run `npm run client:test`

## Limitations of The Application
---
* Only 20 numbers can be generated at a time.
* The generated phone numbers is saved on a file rather than a db.
* The data is visible to anyone who has the link
