const gulp = require('gulp'),
      pug = require('gulp-pug');

function pugToHtml() {
  return gulp.src('./pug/index.pug')
          .pipe(pug({pretty: true}))
          .pipe(gulp.dest('./'));
}

module.exports = pugToHtml;