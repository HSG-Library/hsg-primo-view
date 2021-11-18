'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const { view } = require('../config.js');
const config = require('../config.js');

gulp.task('create-package', gulp.series('clean', 'select-view', 'custom-js', 'custom-css', function () {
    const code = config.view();
    console.log('Creating package for : (' + code + '.zip)');
    console.log(code);
    console.log('\r\n');
    console.log('.................................');
    console.log('create view dir:', code);

    const tempDir = 'temp/';
    const viewDir = tempDir + code;
    gulp.src('*.*', { read: false })
        .pipe(gulp.dest(viewDir));

    gulp.src(['../', '../html/**', '../img/**', '../css/custom1.css', '../js/custom.js'], { base: '..' })
        .pipe(gulp.dest(viewDir));

    return gulp.src(viewDir + '/**', { base: tempDir })
        .pipe(zip(code + '.zip'))
        .pipe(gulp.dest('.'));
}));
