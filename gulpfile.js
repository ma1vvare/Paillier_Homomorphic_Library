'use strict';

var env = process.env.NODE_ENV || 'development';
var gulp = require('gulp');
var tsc = require('gulp-tsc');
var size = require('gulp-size');
var path = require('path');
var typedoc = require("gulp-typedoc");


gulp.task('tsc', function () {
    return gulp.src(['./src/build.d.ts'])
        .pipe(tsc({
            target: 'ES5',
            module: 'amd',
            out: 'index.js',
            outDir: 'dist/',
            emitError: true,
            sourceMap: false,
            declaration: false, // the .d.ts file can be added too
            removeComments: env === 'production'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(size({title: 'TypeScript size -> '}));
});

gulp.task("typedoc", function () {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            out: "docs/",
            name: "paillier.js"
        }))
        ;
});