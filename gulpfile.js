var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var pug             = require('gulp-pug');
var reload          = browserSync.reload;
var cache           = require('gulp-cache');
var uglify          = require('gulp-uglify');
var prefix          = require('gulp-autoprefixer');
var cssnano         = require('gulp-cssnano');
var htmlmin         = require('gulp-htmlmin');
var runSequence     = require('run-sequence');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass()) // Using gulp-sass
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        })) // pipe to pug plugin
        .pipe(gulp.dest('app')) // tell gulp our output folder
});

gulp.task('html-min', function() {
    return gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function(){
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('css-nano', function(){
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('fonts', function() {
    return gulp.src('app/assets/fonts/**/*')
        .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('docs', function() {
    return gulp.src('app/assets/docs/**/*')
        .pipe(gulp.dest('dist/assets/docs'))
});

gulp.task('vid', function() {
    return gulp.src('app/assets/vid/**/*')
        .pipe(gulp.dest('dist/assets/vid'))
});

gulp.task('bower', function(){
    gulp.src('app/bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('app/js'))

    gulp.src('app/bower_components/eden/dist/css/eden.css')
        .pipe(gulp.dest('app/css'))
    gulp.src('app/bower_components/eden/dist/js/eden.js')
        .pipe(gulp.dest('app/js'))

    gulp.src('app/bower_components/typed.js/dist/typed.min.js')
        .pipe(gulp.dest('app/js'))
});

gulp.task('minify', ['html-min', 'uglify', 'css-nano']);

gulp.task('transfer', ['fonts', 'docs', 'vid']);

gulp.task('serve', ['pug', 'sass'], function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });

    gulp.watch('app/pug/*.pug', ['pug']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/sass/*.sass', ['sass']);
});

gulp.task('compile', ['minify', 'transfer']);

gulp.task('live', function(){
    gulp.watch('app/sass/*.sass')
});

gulp.task('default', ['serve']);
