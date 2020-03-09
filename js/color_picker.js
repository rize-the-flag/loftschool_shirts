document.addEventListener( 'DOMContentLoaded', function () {

    const pickerList = document.querySelectorAll( '.color-picker__item' );
    const tshirtsList = document.querySelectorAll( '.product-image__pic' );
    let tshirtActive = document.querySelector( '.product-image__pic--active' );

    pickerList.forEach( function ( picker ) {
        picker.addEventListener( 'click', function () {

            if ( !picker.classList.contains( 'color-picker__item--disabled' ) ) {
                document.querySelector( '.color-picker__item--checked' ).classList.remove( 'color-picker__item--checked' );
                let pickerColor = picker.getAttribute( 'data-color' );
                picker.classList.add( 'color-picker__item--checked' );

                tshirtsList.forEach( function ( tshirt ) {

                    let tshirtColor = tshirt.getAttribute( 'data-color' );

                    if ( tshirtColor === pickerColor ) {

                        tshirtActive = document.querySelector( '.product-image__pic--active' );
                        tshirtActive.classList.remove( 'product-image__pic--active' );

                        tshirt.classList.add( 'product-image__pic--active' );
                    }
                } );
            }

        } );
    } );

} );