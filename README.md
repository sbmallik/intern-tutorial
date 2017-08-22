# Intern functional test repository

This repository contains simple tests that uses intern and runs them in cloud based environment such as Sauce Labs. Both unit and functional tests are included here. The tests are very basic as the main emphasis is to configure the various environments (browser, OS etc) and utilizing the grunt utility. 

## Pre-requisites

* A Bourne-compatible shell, like bash or zsh (or knowledge to execute equivalent commands in your environment)
* [Git](http://gitscm.com/)
* [Node 0.8+](http://nodejs.org/)
* A [free Sauce Labs account](https://saucelabs.com/signup/plan/free)

Once you have all the necessary prerequisites, download this demo application by cloning this repository:

```bash
git clone https://github.com/sbmallik/intern-tutorial.git

# Setup

This setup installs all npm packages with local dependencies. Alternately some packages like grunt etc can be installed globally as well. In such a case the confgiuration files like package.json or Gruntfile.js needs update.

Install Intern, grunt and all dependent packages as follows: `npm install`


# Running Tests

There are several ways to run the tests. For example only the unit tests can be exeucted using the Intern Client task as follows:
```./node_modules/.bin/intern-client config=tests/intern```

To run the functional tests in Sauce Labs use the following command:
```./node_modules/.bin/intern-runner config=tests/intern```
All the browser and operating system settings are defined in the file `tests/intern.js`. This running option has been depricated due to addition of grunt tasks.

In addition, the grunt tasks can be used to run the tests in the following ways (as defined in the grunt file):
* `./node_modules/grunt-cli/bin/grunt intern:unitTest` runs the Unit tests locally.
* `./node_modules/grunt-cli/bin/grunt intern:functionalTest` runs the functional tests only in Sauce Labs.
* `./node_modules/grunt-cli/bin/grunt test` runs the functional tests again as the 'test' task is set accordingly.
* `./node_modules/grunt-cli/bin/grunt` runs the functional tests again as the 'default' task is equated with 'test' task.

Lastly the tests can also be run using the `npm run test` utility as per the settings in the `package.json` file. 
