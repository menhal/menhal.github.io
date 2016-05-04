var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    htmlreplace =  require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');
var exec = require('child_process').exec;
var header = require("gulp-header");
var browserSync = require("browser-sync");

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('copy', ['clean', 'scss'], function() {

    gulp.src("./css/main.css")
        .pipe(minifyCSS({compatibility:"ie7",advanced :false}))
        .pipe(header("/*<%=time%>*/", {time:(new Date()).toLocaleString()}))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./images/**')
        .pipe(gulp.dest('./dist/images'));

    gulp.src('./img/**')
        .pipe(gulp.dest('./dist/img'));

	gulp.src('./*.html')
        .pipe(gulp.dest('./dist'));

    gulp.src(['./js/**'])
        .pipe(gulp.dest('./dist/js'));

    gulp.src('./css/font/*')
        .pipe(gulp.dest('./dist/css/font'));

    gulp.src('./templates/*.html')
        .pipe(gulp.dest('./dist/templates'));
});

gulp.task('connect', function() {
    var fs = require('fs');

    browserSync({
        server: "./", online: true, notify: false,
        rewriteRules: [
            {
                match: /@include\("(.+?)"\)/g,
                fn: function (match, filename) {
                    if (fs.existsSync(filename)) {
                        return fs.readFileSync(filename);
                    } else {
                        return '<span style="color: red">'+filename+' could not be found</span>';
                    }
                }
            }
        ]
    })
});

gulp.task("cssmin", function(){
    gulp.src("./css/main.css")
        .pipe(minifyCSS({compatibility:"ie7",advanced :false}))
        .pipe(header("/*<%=time%>*/", {time:(new Date()).toLocaleString()}))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(browserSync.stream());
});

gulp.task('scss', function () {
    gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"expanded"}).on('error', sass.logError))
        .pipe(autoprefixer("> 0.1%"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
});

gulp.task("css", function(){
    gulp.src('./css/main.css')
        .pipe(browserSync.stream({match: "**/*.css"}))
})

gulp.task('dist',function(){
    gulp.run('copy');
});


gulp.task('watch', function () {
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['scss/**/*.scss'], ['scss']);
    gulp.watch(['css/*.css'], ['css']);
    gulp.watch(['js/*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);