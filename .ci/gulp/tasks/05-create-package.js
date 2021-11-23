'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const config = require('../config.js');

gulp.task('prepare-package', gulp.series('clean', 'select-view', 'custom-js', 'custom-css', function () {
    console.log('task: prepare-package');
    const code = config.view();
    const tempDir = 'temp/';
    const viewDir = tempDir + code;
    gulp.src('*.*', { read: false })
        .pipe(gulp.dest(viewDir));
    console.log('copy files to temp view directory:', viewDir)
    return gulp.src(['../', '../html/**', '../img/**', '../css/custom1.css', '../js/custom.js'], { base: '..' })
        .pipe(gulp.dest(viewDir));
}));

gulp.task('zip-package', function () {
    console.log('task: zip-package');
    const code = config.view();
    const tempDir = 'temp/';
    const viewDir = tempDir + code;
    const packagename = code + '.zip';
    console.log('creating zip package form', viewDir);
    console.log('packagename:', packagename);
    return gulp.src(viewDir + '/**', { base: tempDir })
        .pipe(zip(packagename))
        .pipe(gulp.dest('.'));
});

gulp.task('create-package', gulp.series('prepare-package', 'zip-package', async function () {
    console.log('task: create-package');
    const code = config.view();
    console.log('Package for ' + code + ' ready.');
    console.log('do cleanup/post processing');
    // cleanup
    return;
}));
