const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const webserver = require('gulp-webserver')
const express = require('express')
const https = require('https')
const imagemin = require('gulp-imagemin')
gulp.task('compileHTML', () => {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist'))
        gulp.src('./src/pages/**/*.html')
        .pipe(gulp.dest('dist/pages'))
})
gulp.task('compileCSS', () => {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('dist/styles'))
})
gulp.task('compileJS', () => {
    gulp.src('./src/scripts/statics/**/*.js')
        .pipe(babel({
            'presets': ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/statics'))
    gulp.src('./src/scripts/js/**/*.js')
        .pipe(babel({
            'presets': ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/js'))
    gulp.src('./src/scripts/libs/**/*.js')
        .pipe(gulp.dest('dist/scripts/libs'))
})
gulp.task('compileIMG', () => {
    gulp.src('./src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})
gulp.task('server', () => {
    gulp.src('dist')
        .pipe(webserver({
            port: 5500,
            livereload: true
        }))
    gulp.watch('src/**/*.html', ['compileHTML'])
    gulp.watch('src/styles/**/*.scss', ['compileCSS'])
    gulp.watch('src/scripts/**/*.js', ['compileJS'])
    gulp.watch('src/images/**/*.*', ['compileIMG'])

    let app = express()
    app.get('/api/kaolalist', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'text/plain;charset=utf8')
        let proxy = https.request({
            hostname: 'search.kaola.com',
            path: '/api/getFrontCategory.shtml?xRequestedWith=XMLHttpRequest',
            method: 'get'
        }, (response) => {
            response.pipe(res)
        })
        proxy.end()
    })
    app.listen(9528)
})
gulp.task('build', ['compileHTML', 'compileCSS', 'compileJS', 'compileIMG'])