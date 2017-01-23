'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
