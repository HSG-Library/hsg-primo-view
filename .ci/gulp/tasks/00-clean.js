'use strict';
const gulp = require('gulp');
const del = require('del');
const config = require('../config.js');

gulp.task('clean', function () {
    console.log('task: clean');
    let buildParams = config.buildParams;
    let css = buildParams.customCssPath();
    let js = buildParams.customJsPath();
    let map = buildParams.customMapPath();
    console.log('removing:', css, js, map);
    return del([css, js, map], { force: true });
});
