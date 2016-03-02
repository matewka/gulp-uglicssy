var gulp = require('gulp');
var uglicssy = require('./../dist/gulp-uglicssy');

gulp.task('uglicssy', function () {
  return gulp.src('src/*')
    .pipe(uglicssy())
    .pipe(gulp.dest('dist'));
});

gulp.task('uglicssy:bundle', function () {
  var bundle = uglicssy.bundle();

  gulp.src('src/*.css')
    .pipe(bundle())
    .pipe(gulp.dest('dist'));

  gulp.src('src/*.html')
    .pipe(bundle())
    .pipe(gulp.dest('dist'));

  gulp.src('src/*.js')
    .pipe(bundle())
    .pipe(gulp.dest('dist'));
});