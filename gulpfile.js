var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
const stripCssComments = require('gulp-strip-css-comments');
var prefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('sass', function () {  
    gulp.src('assets/scss/style.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(prefix(prefixerOptions))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(stripCssComments({
            preserve: false
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        },
        open: false,
        notify: false
    });
});
gulp.task('build', ['sass']);
gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("*.html", browserSync.reload);
    gulp.watch("assets/scss/**/*.scss", ['sass']);
});
