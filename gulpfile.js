const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const tailwindcssConfig = require('./tailwind.config.js');
const autoprefixer = require('gulp-autoprefixer');

compileSass.compiler = require('node-sass');

const Autoprefixer = [
    'last 2 versions',
    "> 1%",
    "ie >= 8",
    "edge >= 15",
    "ie_mob >= 10",
    "ff >= 45",
    "chrome >= 45",
    "safari >= 7",
    "opera >= 23",
    "ios >= 7",
    "android >= 4",
    "bb >= 10"
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

const devWatch = () => {
    watch('./src/scss/**/*.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;