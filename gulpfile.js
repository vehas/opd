var gulp = require('gulp');
// var sass = require('gulp-sass');
// var prefix = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['./*.jade'],
    browser: ['google-chrome'],
    port:	7000
  });
});

gulp.task('default', ['browser-sync'], () => {
	// gulp.watch("public/scss/*.scss", ['sass']);
  watch(['./app.js', './*.html', './views/*.jade'], reload);
});

gulp.task('nodemon', cb => {
  var called = false;
  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      reload({ stream: false });
    }, 1000);
  });
});
