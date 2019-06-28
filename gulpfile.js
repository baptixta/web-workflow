const gulp = require('gulp');
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');

function defaultTask(cb) {
    cb();
}

gulp.task('sass', () => {
    return gulp.src('assets/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({}))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('css', () => {
    return gulp.src('./assets/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', () => {
    gulp.watch(`./assets/**/*.scss`, gulp.series('sass'));
    gulp.watch(`./css/**/*.css`, gulp.series('css'));
})


exports.default = defaultTask
