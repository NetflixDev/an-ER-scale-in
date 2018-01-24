# Netflix Generic Source Testing

## Intro
This project maintains infrastructure that can be used to run tests on Generic-Sources. Scaffolding for Generic Sources
can be found in this project: https://github.com/NetflixAdsEng/da-generic-source-scaffolding

The testing architecture is an implementation of the Google Polymer Web Components project's `web-component-tester` tool.
https://github.com/Polymer/web-component-tester

It can be installed both locally and/or on a server. Locally, the tests enable Netflix to drive & communicate requirements to 
collaborators. On the server, the tests serve to protect production from inadvertent development errors by limiting 
what can be committed to master.


## Installation
`npm run init`
 - installs `web-component-tester`
 - installs all of the supporting frameworks necessary to run local tests
 - installs npm dependencies


## Running Tests

#### SELENIUM
Selenium can run any number of tests on any installed browsers. When run from the CLI, it will 
automatically launch Chrome and execute until all the tests are complete.

`npm run test`   
 - build all of the preview files.
 - generate a test suite for Monet requirements (ex: `boilerplate_tests.html`).
 - launch Selenium and run everything in the `test/` folder on every browser specified (and installed).

 To stop the testing process, press SPACE-BAR. This will give the application the proper signal
 to clean-up after itself.

#### SELENIUM HEADLESS
Headless testing allows this whole process to exist on a server as a CICD process.

 `npm run headless`
 - same as above, except headless in Chrome.


#### A Note about Headless Chrome....
Chrome v59 was released earlier in 2017. Accordingly, there is an open issue with the Polymer Project's Web-Component-Tester,
which prevents the headless option from working. [See the issue here.](https://github.com/Polymer/web-component-tester/issues/561) 

A pull-request (from this repo)[https://github.com/ff0000/web-component-tester] has the fix, but there has been no movement.

I researched forking the project to make the fix, but the WCT project's build from TypeScript has errors (!!). Therefore
any fixes would have to be written directly into the distribution rather than the source.

The hope is, rather, that Google will fix their build, accept our pull-request, and headless testing will 
be ready for implementation.

