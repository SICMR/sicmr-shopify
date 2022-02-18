// INCLUDE GULP
var gulp = require('gulp')
var rename = require('gulp-rename')
var sass = require('gulp-sass')(require('sass'))
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')

// COMPILE SASS
gulp.task('sass', function () {
  return gulp.src('scss/index.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer()).pipe(rename('assets/styles.css')).pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
  gulp.watch(['scss/*', 'scss/**/*'], gulp.series('sass'))
})

gulp.task('default', gulp.parallel('watch'))
