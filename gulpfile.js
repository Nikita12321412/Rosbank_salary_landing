const gulp = require('gulp');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const concatCss = require('gulp-concat-css');



let project_folder = 'dist'
let source_folder = 'src'

let path = {
    build: {
        html: './' + project_folder + '/',
        css: './' + project_folder + '/css/',
        js: './' + project_folder + '/js/',
        img: './' + project_folder + '/img/',
        fonts: './' + project_folder + '/fonts/'
    },

    src: {
        html: source_folder + '/*.html',
        css: source_folder + '/css/*.css',
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

const cssClean = () => {
    return gulp.src('src/css/styles.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        // .pipe(g.stream());
};

function getting_html() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/html'))
}


function js() {
    return gulp.src(path.src.js)
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/js'))
}


function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/fonts'))
}


const concat = () => {
    return gulp.src(path.src.css)
      .pipe(concatCss("styles.css"))
      .pipe(gulp.dest('dist/css'))
      .pipe(gulp.dest('src/css'));
  };



const optimizeImages = () => {
    return gulp.src(path.src.img)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img'));
  };


let build = gulp.series(concat, cssClean, js, fonts, optimizeImages, getting_html)
let watch = gulp.parallel(build, Sync)


exports.build = build
exports.default = watch