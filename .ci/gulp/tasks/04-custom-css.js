'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let concat = require("gulp-concat");

let buildParams = config.buildParams;

gulp.task('custom-css', gulp.series('select-view', () => {
    console.log('task: custom-css');
    return gulp.src([buildParams.customCssMainPath(), '!' + buildParams.customCssPath()])
        .pipe(concat(buildParams.customCssFile))
        .pipe(gulp.dest(buildParams.viewCssDir()));
}));
