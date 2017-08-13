var gulp = require('gulp');
var connect =require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect',function(){
    connect.server({
        //root: 'public',
        port: 5000
    })
});

gulp.task('default', ['connect']);