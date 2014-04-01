var nodemon = require('gulp-nodemon'),
    less = require('gulp-less'),

    gulp = require('gulp');

gulp.task('less', function () {
    gulp.src('./app/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    console.log('add gulp-requirejs to compile js');
});

gulp.task('s', function () {
  nodemon({ script: 'app.js', options: '-e html,js -i main.css' });
});
