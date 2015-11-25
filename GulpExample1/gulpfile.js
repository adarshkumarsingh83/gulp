var gulp = require('gulp');


gulp.task('MyTaskOne', function(event) {
   console.log('MyTaskOne Executing');
});

gulp.task('MyTaskTwo', function(event) {
    console.log('MyTaskTwo Executing');
});

gulp.task('default', ['MyTaskOne', 'MyTaskTwo']);