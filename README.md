# Netflix Generic Source - WEB COMPONENT


## Overview
Generic Sources are the building blocks of Monet Containers. There are several types:
 - __Build Templates__
 - __Web Components__
 - __Packages__

Web Components are a flexible, long-standing HTML/CSS/JS framework that is in a good position to become a browser standard. Netflix 
uses the Web Components pattern for its ability to be implemented in a variety of ways: They are supported by Google Web Designer, 
and, with polyfills and some tooling, they can be utilized in agency frameworks.

This scaffold provides tools that make it easier to author, test, maintain, share, and migrate Web Components.




## Installation
`npm install` && `npm run init`
 - attaches the GS-tracker to GWD-manifest
 - git hooks are installed from `./hooks` to `./.git/hooks`. These ensure that the `./dist` folder is up-to-date.
 - if there is a `./lib/package.json`, then it will also be installed. This allows authors of this scaffold to bundle additional infrastructure, if needed.
 - installs the testing framework. For more information, see [NetflixAdsEng/da-testing-framework](https://github.com/NetflixAdsEng/da-testing-framework)




## Monet/C20 Compatibility

#### GENERIC SOURCE TRACKING
You will notice a file in your `./src` folder that looks like:

`c73f6129-5748-4609-ae15-a7b0ce6042af.js`

__Do not delete this file!__ In fact, it should be distributed along with your published files.

This tracker file is used by Monet to identify this component. It is in the form of a JS file so that it can
be included in GWD manifest.json as a publishable dependency.

#### DEVELOPMENT vs. PUBLISHED
This switch is here: `package.json -> genericSource.state`. It's options are:
 - `development`: Default state, the component will appear in Monet, but it will not be available for preview or download
 - `published`: Production state, the component will appear in Monet with preview/download links to the `./dist/` folder
 - `disabled`: Disabled state, the component will __not__ appear in Monet


#### GWD Web Components
The GWD spec for authoring Web Components begins here [Using Custom Components](https://support.google.com/webdesigner/topic/6175722?hl=en&ref_topic=3181232).
The `manifest.json` is critical for our purposes.

The GWD `manifest.json` enables:
 - the GWD application to surface the specified web-component UI to users
 - this package's `./lib/api` to automatically build browser-ready versions of the web-component




## Development

### SRC
All of your dev should happen in `./src` folder. Please refer to the evolving standards surrounding Web Components.

The required file is `manifest.json` -- that describes the public features of your component. Detailed information 
about the manifest format is here [Component JSON manifest](https://support.google.com/webdesigner/answer/6172389?hl=en).

Otherwise, you may own the `./src` folder. Add whatever scaffolding & build-dependencies you need to dev/build/maintain this component. 

###### LOCALHOST
`npm run localhost`
 - starts a python SimpleHTTPServer at http://0.0.0.0:8000/
 - opens Chrome at that address 


###### DOCUMENTATION
The `.src/` has it's own `README.md`. Please make use of it to communicate component functionality.




### BUILD
You must use `./src/manifest.json` to declare component dependencies. The format can be found here: [Component JSON manifest](https://support.google.com/webdesigner/answer/6172389?hl=en).

The component-API will use `./src/manifest.json` to automatically build a number of helper files (see below).

`npm run build`
 - creates a Web Component "link file" (ex: `component_link.html`) from a GWD manifest.json
 - creates a Web Component "preview file" (ex: `index.html`), which can run in a browser, load, and play the "link file"
 - creates `./index.js` which enables this component to be added as an NPM-style dependency


### PUBLISH
`npm run publish`
 - copies `./src` to `./dist/src`
 - creates a zip in `./dist/gwd` that can be imported as a Component in GWD
 - marks the component as `published` in C20







## Testing
`npm run install-testing-framework`
 - this will install all of the infrastructure necessary to run automated tests on these components.

#### SELENIUM
Selenium can run any number of tests on any installed browsers. When run from the CLI, it will 
automatically launch Chrome and execute until all the tests are complete.

`npm run test`   
 - build all of the preview files.
 - generate a test suite for Monet requirements (ex: `boilerplate_tests.html`).
 - launch Selenium and run everything in the `./test` folder on every browser specified (and installed).

 To stop the testing process, press SPACE-BAR. This will give the application the proper signal
 to clean-up after itself.

 `npm run headless`
 - same as above, except it all happens from the CLI

 This is for automating the test process, with Git-hooks to a CICD server.

 **Note about Headless Testing:** There is an outstanding issue (and pull request with the fix) submitted to the Polymer team. For 
 more information, see the [testing framework repo](https://github.com/NetflixAdsEng/da-testing-framework)







## Note about this Scaffold
This repo was generated by Container 2.0 using [NetflixAdsEng/da-generic-source-scaffolding](https://github.com/NetflixAdsEng/da-generic-source-scaffolding). 

To affect the initial state of these repos (for example, this README), please review that project and commit accordingly.

This project scaffolds a build process for src -> dist -> origin/master. Please go to the [./src folder README](./src) for more information about the distinct qualities of this component:
 - its "context"
 - base files / functionalities / interface / compatibilities
 - authoring strategies
 - etc.

