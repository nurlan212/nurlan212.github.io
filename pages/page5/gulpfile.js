const gulp = require("gulp");
const {watch, task, parallel, series} = require("gulp");
const sassCompiler = require('./js/sass.js');
const pugToHtml = require('./js/pug.js');

function sassWatcher (cb) {
  watch('./sass/**/*.sass', series(sassCompiler));
  cb();
}

function pugWatcher(cb) {
  watch('./pug/**/*.pug', series(pugToHtml));
  cb();
}

exports.sassWatcher = sassWatcher;
exports.pugWatcher = pugWatcher;
// exports.default = series(sassCompiler);
exports.default = series(pugWatcher, sassWatcher);