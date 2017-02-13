// Karma configuration
// Generated on Mon Jun 16 2014 15:04:49 GMT+1000 (AUS Eastern Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            "lib/jquery/dist/jquery.js",
            "lib/jquery-fancyBox/source/jquery.fancybox.pack.js",
            "lib/flexslider/jquery.flexslider.js",
            "lib/angular/angular.js",
            "lib/angular-mocks/angular-mocks.js",
            "lib/angular-ui-router/release/angular-ui-router.js",
            "scripts/angular-ui-module.js",
            "lib/angular-resource/angular-resource.js",
            "lib/angular-sanitize/angular-sanitize.js",
            "lib/angular-translate/angular-translate.js",
            "node_modules/jasmine-core/lib/jasmine-core/jasmine.js",
            "lib/bootstrap/dist/js/bootstrap.js",
            "lib/angular-bootstrap/ui-bootstrap-tpls.js",
            "scripts/modules/app.js",
            "scripts/controllers/homeController.js",
            "scripts/controllers/insurantsController.js",
            "scripts/controllers/mainController.js",
            "scripts/controllers/navbarController.js",
            "scripts/services/riskService.js",
            "scripts/services/translateService.js",
            "scripts/services/purchaseService.js"   
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        plugins: [
              'karma-chrome-launcher',
              'karma-jasmine'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};