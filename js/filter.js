'use strict';

document.addEventListener( 'DOMContentLoaded', function () {

    const filterLinks = document.querySelectorAll( '.filter__link' );
    const activeClass = 'filter__item--active';
    let activeLink = document.querySelector( '.' + activeClass );
    let filterName = activeLink.getAttribute( 'data-filter' );

    const isoObj = isotopInit( '.products__list', '.products__item', 'popular' );

    filterLinks.forEach( function ( element ) {
        element.addEventListener( 'click', evt => {
            if ( activeLink !== undefined ) {
                activeLink.classList.remove( activeClass );
            }
            evt.preventDefault();

            filterName = element.getAttribute( 'data-filter' );
            activeLink = element.closest( '.filter__item' );

            activeLink.classList.add( activeClass );
            isoObj.arrange( {
                filter: `.${filterName}`,
            } );

            console.log( 'click' );

        } );
    } );


} );

function isotopInit( container, itemSelector, filterFields ) {
    const elem = document.querySelector( container );
    const iso = new Isotope( elem, {
        // options
        itemSelector: itemSelector,
    } );

    iso.arrange( {
        filter: `.${filterFields}`
    } );

    return iso;
}