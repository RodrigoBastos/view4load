/**
 * Created by rodrigo on 21/10/15.
 */
var gulp          = require('gulp');
var rename        = require('gulp-rename');
var uglify        = require('gulp-uglify');
var include       = require('gulp-include');

var paths = {
    js: ['./source/js/*.js']
};

var watchpaths = {
  js: ['./source/js/**/*.js']
};

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  gulp.watch(watchpaths.js, ['js']);
});

gulp.task('js', function(done) {
  gulp.src(paths.js)
    .pipe(include())
    .pipe(uglify({mangle:false}))
    .pipe(rename({extname:'.min.js'}))
    .pipe(gulp.dest('./dist'))
    .on('end', done);
});
