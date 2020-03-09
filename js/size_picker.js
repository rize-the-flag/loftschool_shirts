document.addEventListener( 'DOMContentLoaded', function () {

    const sizeButtonsList = document.querySelectorAll( '.menu-sizes__item' );
    const activeClass = 'menu-sizes__item--active';

    sizeButtonsList.forEach( value => {
        value.addEventListener( 'click', evt => {
            let activeButton = document.querySelector( '.' + activeClass );
            let item = evt.target.closest( 'li' );
            item = ( item === null ) ? evt.target : item;
            if ( item !== activeButton ) {
                activeButton.classList.remove( activeClass );
                item.classList.add( activeClass );
            }
        } );
    } );

} );