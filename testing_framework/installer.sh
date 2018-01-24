#!/bin/sh

# https://github.com/Polymer/web-component-tester
# - needs to be global :( sorry
npm install -g web-component-tester

# packages necessary for web-component-tester browser tests
# - only installable via bower :( sorry
npm install bower
node_modules/bower/bin/bower install web-component-tester

# install test-runner dependencies
cd testing_framework
npm install