'use strict';
const gulp = require('gulp');
const config = require('../config.js');

gulp.task('select-view', (cb) => {
    console.log('task: select-view');
    return new Promise(resolve => {
        if (!config.view()) {
            let code = "41SLSP_HSG-sandbox_jfu"
            console.log('view not set, using fallback view', code);
            config.setView(code);
            console.log('view is set to ', config.view());
            resolve();
        }
        console.log('view was already set to ', config.view());
        resolve();
    })
});
