'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const config = require('../config.js');

gulp.task('create-package', gulp.series('clean', 'select-view', 'custom-js','custom-css', function () {
    const code = config.view();
    console.log('Creating package for : ('+code+'.zip)');
    console.log(code);
    console.log('\r\n');
    console.log('............................................................................................................................................');
    return gulp.src(['../','../html/**','../img/**','../css/custom1.css','../js/custom.js'], {base: '..'})
        .pipe(zip(code+'.zip'))
        .pipe(gulp.dest('.'));
}));
