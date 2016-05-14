'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('build', function () {
  return browserify({ entries: ['./src/math.js'] })
    .bundle()
    .pipe(source('math.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('min', function () {
  return browserify({ entries: ['./src/math.js'] })
    .bundle()
    .pipe(source('math.min.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('debug', function () {
  return browserify({ entries: ['./src/math.js'], debug: true })
    .bundle()
    .pipe(source('math.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('dev', function () {
   gulp.watch('./src/*.js', ['debug']);
});
