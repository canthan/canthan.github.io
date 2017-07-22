/**
 * Created by Andrzej on 01.07.2017.
 */
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');


gulp.task('sass', function(){
    /*return gulp.src('app/styles/style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/styles'))
        .pipe(browserSync.reload({
            stream: true
       }))*/
});

gulp.task('browserSync', function() {
    browserSync.init({
       /* server: {
            baseDir: "http://localhost:8110/index.html#!/galleries"
        },*/
        proxy:"localhost:8110"
    })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    //gulp.watch('app/styles/*.scss', ['sass']);
    gulp.watch('app/*/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*/*.html', browserSync.reload);
    gulp.watch('app/*/*.css', browserSync.reload);
});

gulp.task('default', ['watch']);