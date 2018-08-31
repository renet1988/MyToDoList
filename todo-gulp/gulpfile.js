const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gulp.src('src/public/images/*')
    .pipe(gulp.dest('dist'));
  gulp.src('src/public/stylesheets/*')
    .pipe(gulp.dest('dist'));
  gulp.src('src/**/*.pug')
    .pipe(gulp.dest('dist'));
  gulp.src('src/bin/*')
    .pipe(gulp.dest('dist/bin'));
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(uglify())
    //.pipe(gulp.dest('dist'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
