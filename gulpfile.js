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
const minifyJs = require('gulp-terser');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');

compileSass.compiler = require('node-sass');

const Autoprefixer = [
    'last 2 versions',
    "defaults",
    "not IE 11",
    "maintained node versions"
]

const moveMarkdown = () =>
    src('./src/articles/**/*.md')
    .pipe(dest('app/'));

// devBuild
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
    .pipe(replace('~^', '<sup>'))
    .pipe(replace('~~', '</sup>'))
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
        grid: "autoplace"
    }))
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(sourceMaps.write('./'))
    .pipe(dest('dist/css'));


const bundleJs = () =>
    src([
        './src/js/animations/*.js',
        './src/js/functions/*.js',
        './src/js/views/AbstractView.js',
        './src/js/views/ArticleAndSection.js',
        './src/js/views/AbstractLinkArticlesView.js',
        './src/js/views/AbstractSectionView.js',
        './src/js/singlePageApplication.js',
        './src/js/main.js'
    ])
    .pipe(sourceMaps.init())
    .pipe(minifyJs())
    .pipe(concat('main.js'))
    .pipe(sourceMaps.write('./'))
    .pipe(dest('dist/js'));

const devWatch = () => {
    // browserSync.init({
    //     server: "./dist"
    // });
    watch('./src/index.pug', buildIndex);
    watch('./src/articles/**/*.pug', buildArticles);
    watch('./src/articles/**/*.md', buildArticles);
    watch('./src/subpages/**/*.pug', buildSubpages);
    watch('./src/components/**/*.pug', series(buildIndex, buildSubpages, buildArticles));
    watch('./src/_layout_.pug', series(buildIndex, buildSubpages, buildArticles));
    watch('./src/scss/**/*.scss', bundleSass);
    watch('./tailwind.config.js', bundleSass);
    watch('./src/js/**/*.js', series(bundleJs, moveJsWebshim));
    watch('./src/img/**/*.*', moveImg);
    // watch('./dist').on('change', browserSync.reload);
}

// prodBuild

const prodMoveJsWebshim = () =>
    src('./src/js-webshim/minified/polyfiller.js')
    .pipe(minifyJs())
    .pipe(dest('docs/js-webshim/minified/'));

const prodMoveImg = () =>
    src('./src/img/**/*.*')
    .pipe(dest('./docs/img'));

const prodBuildIndex = () =>
    src('./src/index.pug', )
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./docs'));

const prodBuildSubpages = () =>
    src('./src/subpages/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./docs/subpages'));

const prodBuildArticles = () =>
    src('./src/articles/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./docs/articles'));

const prodBundleSass = () =>
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
    .pipe(dest('docs/css'));


const prodBundleJs = () =>
    src([
        './src/js/animations/*.js',
        './src/js/functions/*.js',
        './src/js/views/AbstractView.js',
        './src/js/views/ArticleAndSection.js',
        './src/js/views/AbstractLinkArticlesView.js',
        './src/js/views/AbstractSectionView.js',
        './src/js/singlePageApplication.js',
        './src/js/main.js'
    ])
    .pipe(sourceMaps.init())
    .pipe(concat('main.js'))
    // .pipe(babel({
    //     presets: ['@babel/env']
    // }))
    .pipe(minifyJs())
    .pipe(sourceMaps.write('./'))
    .pipe(dest('docs/js'));

exports.devWatch = devWatch;
exports.devBuild = series(buildIndex, buildSubpages, buildArticles, bundleSass, bundleJs, moveImg, moveJsWebshim);
exports.prodBuild = series(prodBuildIndex, prodBuildSubpages, prodBuildArticles, prodBundleSass, prodBundleJs, prodMoveImg, prodMoveJsWebshim);
exports.moveMarkdown = moveMarkdown;