'use strict';
const gulp = require('gulp');
const templateCache = require('gulp-angular-templatecache');
const config = require('../config.js');
const fs = require('fs');

let buildParams = config.buildParams;

gulp.task('custom-html-templates', gulp.series('select-view', (cb) => {
    console.log('task: custom-html-templates');
    prepareTemplates().on('end', cb);
}));

function parseModuleName() {

    let mainJsContent = fs.readFileSync(buildParams.mainJsPath(), 'utf8');
    let moduleString = "angular.module('";
    let index = mainJsContent.indexOf(moduleString) + moduleString.length;
    mainJsContent = mainJsContent.slice(index);
    index = mainJsContent.indexOf("'");
    let module = mainJsContent.slice(0, index);
    return module;
}

function prepareTempltesWithBrowserify() {
    let module = parseModuleName();
    return gulp.src(buildParams.viewHtmlDir() + '/templates/**/*.html')
        .pipe(templateCache({
            filename: 'customTemplates.js',
            module: module,
            transformUrl: function (url) {
                return url.replace(/^\/+/g, '');
            }
        }))
        .pipe(gulp.dest(buildParams.viewJsDir()));
}

function prepareTemplates() {
    return prepareTempltesWithBrowserify();
}
