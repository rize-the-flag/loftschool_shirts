document.addEventListener( 'DOMContentLoaded', function () {

    const tabsButtonsList = document.querySelectorAll( '.tabs__button' );
    const activeClass = 'tabs__button--active';
    const tabs = document.querySelectorAll( '.product-info__tab' );

    tabsButtonsList.forEach( element => {
        element.addEventListener( 'click', evt => {

            let activeTab = document.querySelector( '.product-info__tab--active' );
            let selectedTab = evt.target.getAttribute( 'data-product-tab' );
            document.querySelector( '.' + activeClass ).classList.remove( activeClass );
            evt.target.classList.add( activeClass );

            tabs.forEach( tab => {
                if ( tab.getAttribute( 'data-product-tab' ) === selectedTab ) {
                    activeTab.classList.remove( 'product-info__tab--active' );
                    tab.classList.add( 'product-info__tab--active' );
                }
            } );
        } );
    } );


} );