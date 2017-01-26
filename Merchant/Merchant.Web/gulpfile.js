var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
    // place code for your default task here
    console.log("Merchant Application");
});

// svi moduli i kontroleri
gulp.task('angularModulesAndControllers', function () {
    return gulp.src(
      ["scripts/modules/app.js"
      , "scripts/controllers/homeController.js"
      , "scripts/controllers/navbarController.js"
      , "scripts/controllers/calculatorController.js"
      , "scripts/controllers/insurantsController.js"
      , "scripts/services/riskService.js"])
      .pipe(concat('angularModAndContrl.js'))
      .pipe(gulp.dest("scripts"));
});