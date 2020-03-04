var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var cssmin = require( 'gulp-cssmin' );
var rename = require( 'gulp-rename' );
const autoprefixer = require( 'gulp-autoprefixer' );
var jsmin = require( 'gulp-jsmin' );
var browserSync = require( 'browser-sync' ).create();
var smartgrid = require( 'smart-grid' );
var LessAutoprefix = require( 'less-plugin-autoprefix' );
var autoprefix = new LessAutoprefix( { browsers: [ 'last 2 versions' ] } );
var combiner = require( 'stream-combiner2' );


gulp.task( 'compile-css', () => {
    return gulp.src( './less/style.less' )
        .pipe( less(
            { plugins: [ autoprefix ] }
        ) )
        .pipe( cssmin() )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( './build/css' ) );
} );

gulp.task( 'compile-js', () => {
    return gulp.src( './js/*.js' )
        .pipe( jsmin() )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( './build/js/' ) );
} );

exports.build = gulp.series( 'compile-css', 'compile-js' );

gulp.task( 'watch', () => {
    browserSync.init( {
        server: {
            baseDir: '/tshirts/helloworlds/',
        },
        browser: 'chrome'
    } );

    gulp.watch( './less/**/*.less' ).on( 'change', () => {
        gulp.src( './less/product_style.less', './less/style.less'  )
            .pipe( less(
                { plugins: [ autoprefix ] }
            ) ).on( 'error', e => {
            console.log( e );
            this.emit( 'end' );
        } )
            .pipe( autoprefixer( { cascade: false } ) )
            .pipe( gulp.dest( './css' ) );

        browserSync.reload();
    } );

    gulp.watch( './js/*.js' ).on( 'change', () => {
        browserSync.reload();
    } );
    gulp.watch( './*.html' ).on( 'change', () => {
        browserSync.reload();
    } );
} );


var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

gulp.task( 'smart-grid', function () {
    smartgrid( './less/', settings );
} );
