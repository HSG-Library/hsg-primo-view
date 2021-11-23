'use-strict'
const minimist = require('minimist');
const requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
const config = require('./gulp/config.js');


let options = minimist(process.argv.slice(2));
config.setView(options.view);
process.env.NODE_ENV = process.env.NODE_ENV || 'production';