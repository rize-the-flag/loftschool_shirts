'use strict';


document.addEventListener( 'DOMContentLoaded', () => {

    const slider = document.querySelectorAll( '.fade-slider__item' );
    let idx = 0;

    setInterval( () => {
        slider[ idx ].classList.remove( 'fade-slider__item--visible' );
        idx++;
        if ( idx >= slider.length ) {
            idx = 0;
        }
        slider[ idx ].classList.add( 'fade-slider__item--visible' );
    }, 5000 );

} );
