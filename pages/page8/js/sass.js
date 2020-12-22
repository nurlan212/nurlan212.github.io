const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

function sassCompiler() {
  return gulp.src('./sass/styles.sass')
      .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
      .pipe(autoprefixer({compressed: false}))
      .pipe(gulp.dest('./css/'));
}

module.exports = sassCompiler;