'use strict';

document.addEventListener( 'DOMContentLoaded', function () {

    const sideBar = document.querySelector( '.sidebar' );
    document.querySelector( '.sidebar__hamburger' ).addEventListener( 'click', () => {
        sideBar.classList.add( 'sidebar--opened' );
    } );

    document.querySelector( '.sidebar__close' ).addEventListener( 'click', () => {
        sideBar.classList.remove( 'sidebar--opened' );
    } );

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

    const controlls = document.querySelectorAll('filter__link');
    const activeClass = 'filter__item--active';

    controlls.forEach((control) => {
        control.addEventListener( 'click',evt => {
            evt.preventDefault();
        });
    })
} );

