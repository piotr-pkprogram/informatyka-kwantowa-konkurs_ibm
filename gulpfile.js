const { series, src, dest, watch } = require('gulp');
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
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');

compileSass.compiler = require('node-sass');

const Autoprefixer = [
    'last 2 versions',
    "defaults",
    "not IE 11",
    "maintained node versions"
]

const moveJsWebshim = () =>
    src('./src/js-webshim/minified/polyfiller.js')
    .pipe(minifyJs())
    .pipe(dest('dist/js-webshim/minified/'));

const moveImg = () =>
    src('./src/img/**/*.*')
    .pipe(dest('./dist/img'));

const buildIndex = () =>
    src('./src/index.pug', )
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'));

const buildSubpages = () =>
    src('./src/subpages/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist/subpages'));

const buildArticles = () =>
    src('./src/articles/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist/articles'));

const bundleSass = () =>
    src('./src/scss/main.scss')
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
    .pipe(dest('dist/css'));


const bundleJs = () =>
    src('./src/js/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(minifyJs())
    .pipe(concat('main.js'))
    .pipe(sourceMaps.write('./'))
    .pipe(dest('dist/js'));

const devWatch = () => {
    browserSync.init({
        server: "./dist"
    });
    watch('./src/index.pug', buildIndex);
    watch('./src/articles/**/*.pug', buildArticles);
    watch('./src/articles/**/*.md', buildArticles);
    watch('./src/subpages/**/*.pug', buildSubpages);
    watch('./src/scss/**/*.scss', bundleSass);
    watch('./src/js/**/*.js', series(bundleJs, moveJsWebshim));
    watch('./src/img/**/*.*', moveImg);
    watch('./dist').on('change', browserSync.reload);
}

exports.devWatch = devWatch;
exports.devBuild = series(buildIndex, buildSubpages, buildArticles, bundleSass, bundleJs, moveImg, moveJsWebshim);;