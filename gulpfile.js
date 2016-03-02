var gulp = require('gulp');
var uglicssy = require('./dist/gulp-uglicssy');

gulp.task('uglicssy', function () {
  return gulp.src('test/src/*')
    .pipe(uglicssy())
    .pipe(gulp.dest('test/dist'));
});