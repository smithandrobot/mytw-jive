var gulp = require('gulp');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var qunit = require('gulp-qunit');;

var paths = {
  css: './src/css/**/*',
  stylus: ['./src/stylus/styles.styl'],
  js: './src/js/app.js',
  tests: './tests/*.html',
  jsTests: './src/js/tests/**/*'
}

gulp.task('default', ['js', 'css'], function() {
  return;
})

gulp.task('watch', function() {
  gulp.watch('./src/stylus/**/*.styl', ['css']);
  gulp.watch(paths.js, ['js']);
  gulp.watch('./src/js/**/*.js', ['test-js']);
});

gulp.task('css', ['stylus'], function() {
  return gulp.src(paths.css)
        .pipe(gulp.dest('./build/css'))
})

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
        .pipe(stylus({}))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('js', function() {
  return gulp.src(paths.js, {read: true})
        .pipe(browserify())
        .pipe(gulp.dest('./build/js'))
})

gulp.task('test-js', function() {
  return gulp.src(paths.jsTests)
         .pipe(browserify())
         .pipe(gulp.dest('./tests'))
})

gulp.task('test', ['test-js'], function() {
  return gulp.src(paths.tests)
         .pipe(qunit())
})