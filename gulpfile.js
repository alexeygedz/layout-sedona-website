const gulp =  require('gulp');
const less = require('gulp-less');
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();

gulp.task("style", function () {
   return gulp.src("source/less/style.less")
       .pipe(plumber())
       .pipe(less())
       .pipe(postcss([
           autoprefixer()
       ]))
       .pipe(gulp.dest("source/css"))
       .pipe(server.stream());
});

gulp.task("serve", ["style"], function () {
    server.init({
        server: "source/"
    });

    gulp.watch("source/less/**/*.less", ["style"]);
    gulp.watch("source/*.html")
        .on("change", server.reload);
});

// gulp.task('watch', function () {
//    gulp.watch('source/less/style.less', gulp.parallel('less'));
// });
//
// gulp.task('default', gulp.parallel('less'));