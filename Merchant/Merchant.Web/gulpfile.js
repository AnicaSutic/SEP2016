var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
    // place code for your default task here
    console.log("Merchant Application");
});

// svi moduli i kontroleri u jedan fajl
gulp.task('angularModulesAndControllers', function () {
    return gulp.src(
      ["scripts/modules/app.js"
      , "scripts/controllers/homeController.js"
      , "scripts/controllers/navbarController.js"
      , "scripts/controllers/calculatorController.js"
      , "scripts/controllers/insurantsController.js"
      , "scripts/services/riskService.js"])
      .pipe(concat('angularModAndContrl.js'))
      .pipe(gulp.dest("gulpFile"));
});

//minimizirane svih javaScript fajlova iz script foldera
gulp.task('uglifyScripts', function () {
    return gulp.src(["scripts/**/*js", "!scripts/**/*min.js"])
    .pipe(uglify())
    .pipe(gulp.dest("gulpFile/scripts"));
});

//minimiziranje bower komponenti