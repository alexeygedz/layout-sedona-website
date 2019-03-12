// const gulp =  require('gulp');
// const less = require('gulp-less');
//
// gulp.task('less', function () {
//     return gulp.src('source/less/style.less')
//         .pipe(less())
//         .pipe(gulp.dest('source/css'));
//
// });
//
// gulp.task('watch', function () {
//     gulp.watch('source/less/style.less', gulp.parallel('less'));
// });
//
// gulp.task('default', gulp.parallel('less', 'watch'));

var gulp        = require('gulp'),
    less        = require('gulp-less'),
    browserSync = require('browser-sync');

gulp.task('less', function() {
    return gulp.src('source/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('source/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'source'
        },
        port: 63342,
        notify: false,
    });
    browserSync.reload();
});


gulp.task('watch', gulp.parallel('browser-sync', 'less', function() {
    gulp.watch('source/less/**/*.less', gulp.parallel('less'));
}));