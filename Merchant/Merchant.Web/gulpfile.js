var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
    console.log("Merchant Application");

});


// concat and uglify all bower components
gulp.task('allBower', function () {
    return gulp.src(
        ["lib/bootstrap/dist/bootstrap.js"
        , "lib/angular/angular.js"
        , "lib/jquery/jquery.js"
        , "lib/angular-ui-router/release/angular-ui-router.js"
        , "lib/angular-sanitize/angular-sanitize.js"
        , "lib/angular-translate/angular-translate.js"
        , "scripts/modernizr-2.6.2.js"
        , "scripts/ui-bootstrap-tpls-2.1.3.min.js"
        , "scripts/scripts.js"
        , "scripts/jquery.flexslider.js"
        , "scripts/jquery.smooth-scroll.js"
        , "scripts/jquery.fancybox.pack.js"
        , "scripts/waypoints.min.js"
         , "scripts/ui-bootstrap-tpls-2.1.3.min.js"])
        .pipe(concat('allBower.js'))
        .pipe(gulp.dest('gulpFiles'))

});


// concat and uglify all modules and controllers
gulp.task('angularModulesAndControllers', function () {
    return gulp.src(
      ["scripts/modules/app.js"
      , "scripts/controllers/homeController.js"
      , "scripts/controllers/navbarController.js"
      , "scripts/controllers/calculatorController.js"
      , "scripts/controllers/insurantsController.js"
      , "scripts/services/riskService.js"])
      .pipe(concat('angularModAndContrl.js'))
      .pipe(gulp.dest("gulpFiles"));
});

// concat all js 
// ovaj pokrenuti,automatski pokrece i ostale koji su potrebni
gulp.task('all_JS', ['allBower', 'angularModulesAndControllers'], function () {
    return gulp.src(
        ["gulpFiles/allBower.js"
         , "gulpFiles/angularModAndContrl.js"])
        .pipe(concat('all_JS'))
        .pipe(uglify())
        .pipe(gulp.dest('gulpFiles'));
});

