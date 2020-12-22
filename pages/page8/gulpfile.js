const gulp = require("gulp");
const {watch, series} = require("gulp");
const sassCompiler = require('./js/sass.js');

function sassWatcher (cb) {
  watch('./sass/**/*.sass', series(sassCompiler));
  cb();
}

exports.sassWatcher = sassWatcher;
exports.default = series(sassWatcher);