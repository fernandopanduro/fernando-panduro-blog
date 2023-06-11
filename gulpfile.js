const { src, dest, parallel } = require('gulp')

// Imagnes
const cache    = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp     = require('gulp-webp');
const avif     = require('gulp-avif')

function imageMin(done) {

    const opciones = {
        optimizationLevel: 3
    }

    src('src/assets/pictures/img/*{png,jpg}')
        .pipe(cache(imagemin(opciones)))        // Convertir a Webp
        .pipe(dest('src/assets/pictures/img'))   // Asignar donde se guardan los archivos

    done()
}

function versionWebp(done) {
    
    const opciones = {
        quality: 50,
    };

    
    src('src/assets/pictures/img/*.{png,jpg,jpeg}')  // Ubicacion para encontar los archivos
        .pipe(webp(opciones))                   // Convertir a Webp
        .pipe( dest('src/assets/pictures/img')) // Asignar donde se guardan los archivos

    done();
}


function versionAvif(done) {
    
    const opciones = {
        quality: 50,
    };

    
    src('src/assets/pictures/img/*.{png,jpg,jpeg}')  // Ubicacion para encontar los archivos
        .pipe(avif(opciones))                   // Convertir a Webp
        .pipe( dest('src/assets/pictures/img')) // Asignar donde se guardan los archivos

    done();
}




exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.imageMin    = imageMin;
exports.dev         = parallel(versionWebp, versionAvif) // npx gulp dev
 