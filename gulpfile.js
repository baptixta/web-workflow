const gulp = require('gulp');
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

function defaultTask(cb) {
    cb();
}

gulp.task('sass', () => {
    return gulp.src('assets/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({}))
      .pipe(gulp.dest('./css'));
});

exports.default = defaultTask
