const gulp = require('gulp');

module.exports = {
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    plugins: {
        "postcss-fontpath": { checkFiles: true, ie8Fix: true },
        tailwindcss: "tailwind.config.js",
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    }

}

gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer')
    const sourcemaps = require('gulp-sourcemaps')
    const postcss = require('gulp-postcss')

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'))
})