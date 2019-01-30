const gulp =  require('gulp');
const less = require('gulp-less');
const browserSync = require('');

gulp.task('less', function () {
   return gulp.src('source/less/style.less')
       .pipe(less())
       .pipe(gulp.dest('source/css'));

});

gulp.task('watch', function () {
   gulp.watch('source/less/style.less', gulp.parallel('less'));
});

gulp.task('default', gulp.parallel('watch'));