const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const tailwindcssConfig = require('./tailwind.config.js');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const minifyJs = require('gulp-uglify');

compileSass.compiler = require('node-sass');

const Autoprefixer = [
    'last 2 versions',
    "defaults",
    "not IE 11",
    "maintained node versions"
]

const bundleSass = () =>
    src('./src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(postcss([
        tailwindcss(tailwindcssConfig),
    ]))
    .pipe(autoprefixer({
        browsers: Autoprefixer,
        cascade: false,
        grid: "autoplace"
    }))
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(sourceMaps.write('./'))
    .pipe(dest('src/css'));

const bundleJs = () =>
    src('./src/js/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(minifyJs())
    .pipe(concat('main.min.js'))
    .pipe(sourceMaps.write('./'))
    .pipe(dest('src/js.min'));

const devWatch = () => {
    watch('./src/scss/**/*.scss', bundleSass);
    watch('./src/js/**/*.js', bundleJs);
}

exports.bundleJs = bundleJs;
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;