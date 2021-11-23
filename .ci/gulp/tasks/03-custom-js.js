'use strict';

const gulp = require('gulp');
const config = require('../config.js');
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

let buildParams = config.buildParams;

gulp.task('custom-js', gulp.series('select-view', 'custom-html-templates', (cb) => {
    console.log('task: custom-js');
    buildByBrowserify().on('end', cb);
}));

function getBrowserifyBabelPlugins() {
    return [
        "transform-html-import-to-string", ["angularjs-annotate", { "explicitOnly": true }]
    ];
}

function getDefaultBabelPlugins() {
    return [
        ["transform-define", {
            "process.env.NODE_ENV": process.env.NODE_ENV,
        }]
    ];
}

const getBabelConfig = () => {
    return ({
        presets: ["@babel/preset-env"],
        plugins: getDefaultBabelPlugins().concat(getBrowserifyBabelPlugins()),
        sourceMaps: true,
    });
}

function buildByBrowserify() {
    return browserify({
        debug: true,
        entries: buildParams.mainJsPath(),
        paths: [
            buildParams.viewJsDir() + '/node_modules'
        ]
    })
        .transform("babelify", getBabelConfig())
        .bundle()
        .pipe(source(buildParams.customJsFile))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildParams.viewJsDir()));
}
