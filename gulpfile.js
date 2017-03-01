var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass') 
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

gulp.watch('app/sass/**/*.sass', ['sass']);


gulp.task('pug', function() {
	return gulp.src('app/pug/**/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('app/html'))
});

gulp.watch('app/pug/**/*.pug', ['pug']);


gulp.task('pug', function() {
	return gulp.src('index.pug')
	.pipe(pug())
	.pipe(gulp.dest('')) 
});

gulp.watch('index.pug', ['pug']);  