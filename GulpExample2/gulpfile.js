// npm install --save-dev gulp
var gulp = require('gulp');
// npm install --save-dev gulp-connect
var connect = require('gulp-connect');
//npm install --save-dev gulp-uglify
var uglify = require('gulp-uglify');
//npm install --save-dev gulp-watch
var watch = require('gulp-watch');
//npm install --save-dev gulp-concat
var concat = require('gulp-concat');
//npm install --save-dev gulp-notify
var notify = require('gulp-notify');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
	 port: 8080,
     host: 'localhost'
  });
});

gulp.task('js', function() {	
      // create app.min.js file from all js
       gulp.src(['./js/*.js','./js/*/*.js','!js/libs/*.js'])
      .pipe(uglify())
      .pipe(concat("application.min.js"))
      .pipe(gulp.dest('./js/min/'))
      .pipe( notify({ message: "All JS are now ugly!"}) );
});

gulp.task('watch', function() {     
      gulp.watch('./js/*.js', function() {
        gulp.run('js');
      });
  });

gulp.task('default', ['js','webserver', 'watch']);