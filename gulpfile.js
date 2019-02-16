var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
const stripCssComments = require('gulp-strip-css-comments');
var prefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('sass', function () {  
    gulp.src('./sass/**/*.scss')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(prefix(prefixerOptions))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(stripCssComments({
            preserve: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css"], {
        server: {
            baseDir: "./"
        },
        open: true,
        notify: false
    });
});
gulp.task('build', ['sass']);
gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("*.html", browserSync.reload);
    gulp.watch("/sass/**/*.scss", ['sass']);
});
