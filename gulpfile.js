const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const webserver = require('gulp-webserver')
const express = require('express')
// const https = require('htpps')
gulp.task('compileHTML', () => {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist'))
})
gulp.task('compileCSS', () => {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('dist/styles'))
})
gulp.task('compileJS', () => {
    gulp.src('./src/scripts/**/*.js')
        .pipe(babel({
            'presets': ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
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

    let app = express()
    app.get('./api/goodlist', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'text/plain;charset=utf8')
        let proxy = https.request({
            hostname: 'www.smartisan.com',
            path: '/product/shop_categories',
            method: 'get'
        }, (Response) => {
            Response.pipe(res)
        })
        proxy.end()
    })
    app.listen(9528)
})