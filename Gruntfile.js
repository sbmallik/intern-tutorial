module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        intern: {
            unitTest: {
                options: {
                    runType: "client",
                    suites: "tests/unit/hello",
                    config: "tests/intern"
                }
            },
            functionalTest: {
                options: {
                    runType: "runner",
                    functionalSuites: "tests/functional/index",
                    config: "tests/intern",
                    sauceUsername: process.env.SAUCE_USERNAME,
                    sauceAccessKey: process.env.SAUCE_ACCESS_KEY
                }
            }
        }
    });

    // Loading using a local git copy
    grunt.loadNpmTasks('intern');

    // Register a test task that uses Intern
    grunt.registerTask('test', [ 'intern:functionalTest' ]);

    // By default we just test
    grunt.registerTask('default', [ 'test' ]);
};
