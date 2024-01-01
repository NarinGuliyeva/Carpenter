// node modules icerisinden gulp kutuphanesini cagiriyoruz.
const {src,dest,watch,series} = require("gulp");
// const purgecss = require("gulp-purgecss");
// const cssnano = require("gulp-cssnano");
// gulp-sass kutuphanesini cagiririq.
const sass = require("gulp-sass")(require("sass"));

// Hansi faylin hansi fayl ile deyisdirileceyini teyin edirik.
function buildStyles() {
    // sass'in icerisinde istenilen folder ve onun icerisinde istenilen file ucun tesir etsin
    return src("sass/**/*.scss")
    .pipe(sass())
    // .pipe(purgecss({content:["*.html"]}))
    // .pipe(cssnano())
    .pipe(dest("css"))
}
// index.scss'de ve hemcinin diger her fayllarda bir deyisiklik oldugu zaman, buildStyles funksiyasini cagir.
function watchTask () {
    // watch(["sass/**/*.scss","*.html"],buildStyles)
    watch(["sass/**/*.scss"],buildStyles)
};

// deafult olaraq hansi funksiya calisacaq?
exports.default = series(buildStyles,watchTask)