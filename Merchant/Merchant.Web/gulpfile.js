var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');
var karma = require('gulp-karma');

var scriptPaths = {
    root: "scripts/"
};

var stylePaths = {
    root: "Content/"
};

/*ALL ANGULAR*/
scriptPaths.allJS = scriptPaths.root + "allJS.js";
scriptPaths.allJSMin = scriptPaths.root + "allJS.min.js";
scriptPaths.allBower = scriptPaths.root + "allBower.js"

/* JQUERY */
scriptPaths.jquery = scriptPaths.root + "jquery/";
scriptPaths.concatJqueryJsDest = scriptPaths.root + "concatJqueryJs.js";


/* BOOTSTRAP */
scriptPaths.bootstrap = scriptPaths.root + "bootstrap/*.js";
scriptPaths.concatBsJsDest = scriptPaths.root + "concatBsJs.js";

/* ANGULAR JS */

scriptPaths.angular = scriptPaths.root + "angular/*.js";
scriptPaths.angularControllers = scriptPaths.root + "controllers/*.js";
scriptPaths.angularModules = scriptPaths.root + "modules/*.js";
scriptPaths.angularServices = scriptPaths.root + "services/*.js";
scriptPaths.concatAngularDest = scriptPaths.root + "concatAngularJs.js";
scriptPaths.concatAngularModDest = scriptPaths.root + "concatAngularModJs.js";

/* CSS */
stylePaths.css = stylePaths.root + "*.css";
stylePaths.minCss = stylePaths.root + "*.min.css";
stylePaths.concatCssDest = stylePaths.root + "concatCss.min.js";

// concat all bower components
gulp.task("bower:js", function () {
    return gulp.src([
        "lib/jquery/dist/jquery.js",
        "lib/jquery-fancyBox/source/jquery.fancybox.pack.js",
        "lib/flexslider/jquery.flexslider.js",
        "lib/angular/angular.js",
        "lib/angular-ui-router/release/angular-ui-router.js",
        "lib/angular-resource/angular-resource.js",
        "lib/angular-sanitize/angular-sanitize.js",
        "lib/angular-translate/angular-translate.js",
        "lib/bootstrap/dist/js/bootstrap.js",
        "lib/angular-bootstrap/ui-bootstrap-tpls.js"])
    .pipe(concat(scriptPaths.allBower))
    .pipe(gulp.dest("lib"))
});

// concat all angular modules,controllers and services
gulp.task("angularMod:js", function () {
    return gulp.src([
            scriptPaths.angularModules,
            scriptPaths.angularControllers,
            scriptPaths.angularServices])
        .pipe(concat(scriptPaths.concatAngularModDest))
        .pipe(gulp.dest("lib"))
});

//concat bower and modules,controllers and services
gulp.task("concatBower:js",["bower:js", "angularMod:js"] ,function () {
    return gulp.src([
        "lib/scripts/allBower.js",
        "lib/scripts/concatAngularModJs.js"])
    .pipe(concat(scriptPaths.allJS))
    .pipe(gulp.dest("lib"))
});

// uglify concated file
gulp.task("minAll:js",["concatBower:js"] ,function () {
    return gulp.src(["lib/scripts/allJS.js"])
        .pipe(rename(scriptPaths.allJSMin))
        .pipe(uglify())    
        .pipe(gulp.dest("lib"))
});


gulp.task("min:css", function () {
    return gulp.src([stylePaths.css])
        .pipe(concat(stylePaths.concatCssDest))
        .pipe(gulp.dest("lib"))
});

// replace all js files with min file
gulp.task('html-replace', function () {
    return gulp.src('Views/Shared/_Layout.cshtml')
      .pipe(
          htmlreplace({
              'js': ['../lib/scripts/allJS.min.js']
          })
      )
      .pipe(gulp.dest("lib"));
});

/* MAIN TASK */
gulp.task("maintask", ["minAll:js", "html-replace"]);


//karma
gulp.task('test', function () {
    var testFiles = [
        "lib/jquery/dist/jquery.js",
        "lib/jquery-fancyBox/source/jquery.fancybox.pack.js",
        "lib/flexslider/jquery.flexslider.js",
        "node_modules/angular/angular.js",
        "node_modules/angular-mocks/angular-mocks.js",
        "lib/angular-ui-router/release/angular-ui-router.js",
        "lib/angular-resource/angular-resource.js",
        "lib/angular-sanitize/angular-sanitize.js",
        "lib/angular-translate/angular-translate.js",
        "lib/bootstrap/dist/js/bootstrap.js",
        "lib/angular-bootstrap/ui-bootstrap-tpls.js", 
            "scripts/modules/app.js",
            "scripts/controllers/homeController.js",
            "scripts/controllers/insurantsController.js",
            "scripts/controllers/mainController.js",
            "scripts/controllers/navbarController.js",
            "scripts/services/riskService.js",
            "scripts/services/translateService.js",
            "scripts/services/purchaseService.js",
            "scripts/services/paypalService.js",
            "TestScripts/*.js"
    ];
    // Be sure to return the stream 
    return gulp.src(testFiles)
       .pipe(karma({
           configFile: 'tests/karma.conf.js',
           action: 'watch'
       }))
     .on('error', function (err) {
         // Make sure failed tests cause gulp to exit non-zero 
         throw err;
     });
});


/*gulp.task("jquery:js", function () {
    return gulp.src([scriptPaths.jquery + "jquery.js",
            scriptPaths.jquery + "jquery.fancyBox.pack.js",
            scriptPaths.jquery + "jquery.js"])
        .pipe(concat(scriptPaths.concatJqueryJsDest))
        .pipe(gulp.dest("lib"))
});

gulp.task("bootstrap:js", function () {
    return gulp.src([scriptPaths.bootstrap])
        .pipe(concat(scriptPaths.concatBsJsDest))
        .pipe(gulp.dest("lib"))
});

gulp.task("angular:js", function () {
    return gulp.src([scriptPaths.angular])
        .pipe(concat(scriptPaths.concatAngularDest))
        .pipe(gulp.dest("lib"))
});

gulp.task("concatAll:js",["jquery:js", "bootstrap:js", "angular:js", "angularMod:js"], function () {
    return gulp.src([
        "lib/scripts/concatJqueryJs.js",
        "scripts/angular.js",
        "lib/scripts/concatAngularJs.js",
        "lib/scripts/concatBsJs.js",
        "lib/scripts/concatAngularModJs.js",
        scriptPaths.concatAngularModDest
    ]).pipe(concat(scriptPaths.allJS))
    .pipe(gulp.dest("lib"))
});
*/

