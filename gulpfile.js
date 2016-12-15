const gulp = require('gulp');
//handles employing gulp while being hosted on github
const ghPages = require('gulp-gh-pages');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const paths = {
  jsSource: ['./public/app/app.js', './public/app/**/*.js'],
  scssSource: './public/**/**/**/*.scss'
};

gulp.task('js-bundle', () => {
  gulp.src(paths.jsSource)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist'))
});

gulp.task('scss-bundle', () => {
  gulp.src(paths.scssSource)
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/dist'))
});

//pipes everything from the dist folder into ghPages to be deployed
gulp.task('deploy', function(){
  return gulp.src('./public/app/dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', ()=> {
  gulp.watch(paths.jsSource, ['js-bundle'])
  gulp.watch(paths.scssSource, ['scss-bundle'])
});

gulp.task('default', ['watch', 'deploy', 'js-bundle', 'scss-bundle']);
