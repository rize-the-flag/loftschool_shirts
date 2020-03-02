'use strict';


document.addEventListener( 'DOMContentLoaded', function () {

    const sideBar = document.querySelector( '.sidebar' );
    document.querySelector( '.sidebar__hamburger' ).addEventListener( 'click', () => {
        sideBar.classList.add( 'sidebar--opened' );
    } );

    document.querySelector( '.sidebar__close' ).addEventListener( 'click', () => {
        sideBar.classList.remove( 'sidebar--opened' );
    } );
} );