// INCLUDE GULP
var gulp = require('gulp')
var rename = require('gulp-rename')
var sass = require('gulp-sass')(require('sass'))
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var connect = require('gulp-connect')
var cors = require('cors')

// COMPILE SASS
gulp.task('sass', function () {
  return gulp
    .src('scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('assets/styles.css'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
})

gulp.task('server', function () {
  connect.server({
    port: 6969,
    host: 'localhost',
    root: './',
    debug: true,
    livereload: true,
    middleware: (connect, opt) => {
      return [cors()]
    },
  })
})

gulp.task('watch', function () {
  gulp.watch(['scss/*', 'scss/**/*'], gulp.series('sass'))
})

gulp.task('default', gulp.parallel('server', 'watch'))
