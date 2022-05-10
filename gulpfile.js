const gulp = require('gulp');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');

let project_folder = 'dist'
let source_folder = '#src'

let path = {
    build: {
        html: './' + project_folder + '/',
        css: './' + project_folder + '/css/',
        js: './' + project_folder + '/js/',
        img: './' + project_folder + '/img/',
        fonts: './' + project_folder + '/fonts/'
    },

    src: {
        html: source_folder + '/',
        css: source_folder + '/css/style.css',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf'
    },

    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/css/**/*.css',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}'
    },

    clean: './' + '/dist/'
}

const Sync = () => {
    browserSync.init({
        server: {
            baseDir: './' + source_folder
        },
        port: 3000,
        open: true,
        notify: false
    })
    gulp.watch(`./**`).on('change', browserSync.reload)
}

const css = () => {
    return gulp.src(path.src.css)
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        // .pipe(g.stream());
};

function getting_html() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream())
}


let build = gulp.series(getting_html)
let watch = gulp.parallel(Sync)

exports.html = getting_html
exports.build = build
exports.css = css
exports.default = watch