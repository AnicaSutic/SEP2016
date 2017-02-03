var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var scriptPaths = {
    root: "scripts/"
};

var stylePaths = {
    root: "Content/"
};

/* JQUERY */
scriptPaths.jquery = scriptPaths.root + "/jquery/*.js";
scriptPaths.jqueryMin = scriptPaths.root + "/jquery/*.min.js";
scriptPaths.concatJqueryJsDest = scriptPaths.root + "concatJqueryJs.min.js";

/* BOOTSTRAP */
scriptPaths.bootstrap = scriptPaths.root + "/bootstrap/*.js";
scriptPaths.concatBsJsDest = scriptPaths.root + "concatBsJs.min.js";

/* OTHER */
scriptPaths.other = scriptPaths.root + "*.js";
scriptPaths.concatOtherJsDest = scriptPaths.root + "concatOtherJs.min.js";

/* ANGULAR JS */
scriptPaths.angularControllers = scriptPaths.root + "controllers/*.js";
scriptPaths.angularModules = scriptPaths.root + "modules/";
scriptPaths.angularServices = scriptPaths.root + "services/*.js";
scriptPaths.concatAngularDest = scriptPaths.root + "concatAngularJs.min.js";

/* CSS */
stylePaths.css = stylePaths.root + "*.css";
stylePaths.minCss = stylePaths.root + "*.min.css";
stylePaths.concatCssDest = stylePaths.root + "concatCss.min.js";

/* TASKS */
gulp.task("jquery:js", function () {
    return gulp.src([scriptPaths.jquery])
        .pipe(concat(scriptPaths.concatJqueryJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("lib"))
});

gulp.task("bootstrap:js", function () {
    return gulp.src([scriptPaths.bootstrap])
        .pipe(concat(scriptPaths.concatBsJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("lib"))
});

gulp.task("other:js", function () {
    return gulp.src([scriptPaths.other])
        .pipe(concat(scriptPaths.concatOtherJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("lib"))
});

gulp.task("angular:js", function () {
    return gulp.src([
            scriptPaths.angularModules + "app.js",
            scriptPaths.angularControllers,
            scriptPaths.angularServices
        ])
        .pipe(concat(scriptPaths.concatAngularDest))
        .pipe(uglify())
        .pipe(gulp.dest("lib"))
});

gulp.task("min:css", function () {
    return gulp.src([stylePaths.css])
        .pipe(concat(stylePaths.concatCssDest))
        .pipe(gulp.dest("lib"))
});

/* MAIN TASK */
gulp.task("maintask", ["jquery:js", "bootstrap:js", "angular:js", "other:js", "min:css"]);

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

//gulp.task('allBower', function () {
//    return gulp.src(
//        ["lib/**/*.js"
//        , "scripts/*.js"])
//        .pipe(concat('allBower.js'))
//        .pipe(gulp.dest('gulpFiles'))

//});


//// concat and uglify all modules and controllers
//gulp.task('angularModulesAndControllers', function () {
//    return gulp.src(
//      ["scripts/modules/app.js"
//      , "scripts/controllers/homeController.js"
//      , "scripts/controllers/navbarController.js"
//      , "scripts/controllers/mainController.js"
//      , "scripts/controllers/insurantsController.js"
//      , "scripts/services/riskService.js"])
//      .pipe(concat('angularModAndContrl.js'))
//      .pipe(gulp.dest("gulpFiles"));
//});

//// concat all js 
//// ovaj pokrenuti,automatski pokrece i ostale koji su potrebni
//gulp.task('scriptFiles', ['allBower', 'angularModulesAndControllers'], function () {
//    return gulp.src(
//        ["gulpFiles/allBower.js"
//         , "gulpFiles/angularModAndContrl.js"])
//        .pipe(concat('scriptFiles.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('gulpFiles'));
//});

