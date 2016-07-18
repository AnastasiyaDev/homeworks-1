'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps'); // cтруктура даных отражающих что было--что стало, для браузеров
const jsObfuscator = require('gulp-js-obfuscator');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');


const gulpIf = require('gulp-if');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const isProduction = process.env.NODE_ENV == 'production';
 
gulp.task('serve', function(){
	browserSync.init({
     	server: "./dist"
 	});

 	browserSync.watch("./src/*.*").on('change', browserSync.reload);
});

gulp.task('styles', function () {
	return gulp.src('src/less/**/*.less')  // до * - base, после - relative
		// .pipe(debug({titile: 'src'}))
		.pipe(gulpIf(isProduction, sourcemaps.init()))
		.pipe(less())
		.pipe(concat('all.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		 }))
		.pipe(gulpIf(isProduction, uglify()))
		.pipe(gulpIf(isProduction, sourcemaps.write()))
		.pipe(gulp.dest('dist/css')); // public+ relative
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpIf(isProduction, sourcemaps.init()))
        .pipe(concat('all.js'))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(isProduction, jsObfuscator()))
        .pipe(gulpIf(isProduction, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function(){
    return gulp.src('src/img/**')
    	.pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('entryFiles', function(){
    return gulp.src(['src/*.html', 'src/*.php'])
        .pipe(gulp.dest('dist'))
});

gulp.task('eslint', function() {
    return gulp.src('src/js/**/*.js')
    	.pipe(gulpIf(isProduction, eslint()))
});

gulp.task('default', ['styles', 'scripts', 'img', 'entryFiles', 'eslint', 'serve']);


// gulp.task('clean', function(){
// 	return del('dist');
// });

// gulp.task('watcher', function(){
// 	gulp.watch('src/less/**/*.less', gulp.series('styles'));
// });
