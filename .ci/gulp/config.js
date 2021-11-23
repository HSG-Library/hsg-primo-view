'use strict';

let customJsFile = 'custom.js';
let customMapFile = 'custom.js.map';
let customCssFile = 'custom1.css';
let mainFile = 'main.js';

let view;

function getView() {
    return view;
}

function setView(_view) {
    view = _view;
}

function viewRootDir() {
    return `../`;
}

/* CSS */
function viewCssDir() {
    return viewRootDir() + `css`;
}

function customCssMainPath() {
    return viewCssDir() + '/*.css';
}

function customCssPath() {
    return viewCssDir() + `/custom1.css`;
}

/* HTML */
function viewHtmlDir() {
    return viewRootDir() + `html`;
}

/* JS */
function viewJsDir() {
    return viewRootDir() + `js`;
}

function customJsPath() {
    return viewJsDir() + '/' + customJsFile;
}

function customMapPath() {
    return viewJsDir() + '/' + customMapFile;
}

function mainJsPath() {
    return viewJsDir() + '/' + mainFile;
}

let buildParams = {
    customJsFile: customJsFile,
    customCssFile: customCssFile,
    customJsPath: customJsPath,
    customMapPath: customMapPath,
    mainJsPath: mainJsPath,
    viewJsDir: viewJsDir,
    viewHtmlDir: viewHtmlDir,
    viewCssDir: viewCssDir,
    customCssPath: customCssPath,
    customCssMainPath: customCssMainPath,
};

module.exports = {
    buildParams: buildParams,
    setView: setView,
    view: getView,
};
