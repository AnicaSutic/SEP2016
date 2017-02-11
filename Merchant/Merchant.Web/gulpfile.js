var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');

var scriptPaths = {
    root: "scripts/"
};

var stylePaths = {
    root: "Content/"
};

/* JQUERY */
scriptPaths.jquery = scriptPaths.root + "jquery/";
scriptPaths.concatJqueryJsDest = scriptPaths.root + "concatJqueryJs.min.js";
scriptPaths.allJS = scriptPaths.root + "allJS.js";
scriptPaths.allJSMin = scriptPaths.root + "allJSMin.js";

/* BOOTSTRAP */
scriptPaths.bootstrap = scriptPaths.root + "bootstrap/*.js";
scriptPaths.concatBsJsDest = scriptPaths.root + "concatBsJs.min.js";

/* ANGULAR JS */

scriptPaths.angular = scriptPaths.root + "angular/*.js";
scriptPaths.angularControllers = scriptPaths.root + "controllers/*.js";
scriptPaths.angularModules = scriptPaths.root + "modules/*.js";
scriptPaths.angularServices = scriptPaths.root + "services/*.js";
scriptPaths.concatAngularDest = scriptPaths.root + "concatAngularJs.min.js";
scriptPaths.concatAngularModDest = scriptPaths.root + "concatAngularModJs.min.js";

/* CSS */
stylePaths.css = stylePaths.root + "*.css";
stylePaths.minCss = stylePaths.root + "*.min.css";
stylePaths.concatCssDest = stylePaths.root + "concatCss.min.js";

/* TASKS */
gulp.task("jquery:js", function () {
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

gulp.task("angularMod:js", function () {
    return gulp.src([
            scriptPaths.angularModules,
            scriptPaths.angularControllers,
            scriptPaths.angularServices])
        .pipe(concat(scriptPaths.concatAngularModDest))
        .pipe(gulp.dest("lib"))
});

gulp.task("concatAll:js",["jquery:js", "bootstrap:js", "angular:js", "angularMod:js"], function () {
    return gulp.src([
        "lib/scripts/concatJqueryJs.min.js",
        "scripts/angular.js",
        "lib/scripts/concatAngularJs.min.js",
        "lib/scripts/concatBsJs.min.js",
        "lib/scripts/concatAngularModJs.min.js",
        scriptPaths.concatAngularModDest
    ]).pipe(concat(scriptPaths.allJS))
    .pipe(gulp.dest("lib"))
});

gulp.task("minAll:js", function () {
    return gulp.src(["lib/scripts/allJS.js"])
    .pipe(rename(scriptPaths.allJSMin))
    .pipe(gulp.dest("lib"))
});


gulp.task("min:css", function () {
    return gulp.src([stylePaths.css])
        .pipe(concat(stylePaths.concatCssDest))
        .pipe(gulp.dest("lib"))
});

gulp.task('html-replace', function () {
    return gulp.src('Views/Shared/_Layout.cshtml')
      .pipe(
          htmlreplace({
              'js': ['../lib/scripts/allJS.js']
          })
      )
      .pipe(gulp.dest("lib"));
});

/* MAIN TASK */
gulp.task("maintask", ["concatAll:js", "html-replace"]);

// concat and uglify all bower components
//gulp.task('allBower', function () {
//    return gulp.src(
//        ["lib/bootstrap/dist/bootstrap.js"
//        , "lib/angular/angular.js"
//        , "lib/jquery/jquery.js"
//        , "lib/angular-ui-router/release/angular-ui-router.js"
//        , "lib/angular-sanitize/angular-sanitize.js"
//        , "lib/angular-translate/angular-translate.js"
//        , "scripts/modernizr-2.6.2.js"
//        , "scripts/ui-bootstrap-tpls-2.1.3.min.js"
//        , "scripts/scripts.js"
//        , "scripts/jquery.flexslider.js"
//        , "scripts/jquery.smooth-scroll.js"
//        , "scripts/jquery.fancybox.pack.js"
//        , "scripts/waypoints.min.js"
//         , "scripts/ui-bootstrap-tpls-2.1.3.min.js"])
//        .pipe(concat('allBower.js'))
//        .pipe(gulp.dest('gulpFiles'))

//});

