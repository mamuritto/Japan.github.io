(function () {
    const header = document.querySelector( ".header" );
    window.onscroll = () => {
        if ( window.pageYOffset > 50 ){
            header.classList.add( "header__active" )
        } else {
            header.classList.remove( "header__active" );
        }
    }
}());

// burger handler 

(function () {
    const menu = document.querySelector(".header__nav");
    const burgerItem = document.querySelector (".burger");
    const menuCloseItem = document.querySelector (".header__nav-close");
    const menuLinks = document.querySelectorAll( ".nav__item__a" );
    burgerItem.addEventListener("click", () => {
        menu.classList.add("header__nav-active")
    })

    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav-active");
    });

    if( window.innerWidth <= 767 ) {
        for( let i = 0; i < menuLinks.length; i += 1 ) {
            menuLinks[ i ].addEventListener( "click", () => {
                menu.classList.remove("header__nav-active");
            });
        };
    };
}());

// Scroll to anchors

(function() {
    const smoothScroll = function ( targetE1, duration ) {
        const headerE1Height = document.querySelector( ".header" ).clientHeight;
        let target = document.querySelector(targetE1);
        let targetPosition = target.getBoundingClientRect().top - headerE1Height;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function( t, b, c, d ) {
            t /= d / 2;
            if( t < 1 ) return c / 2 * t * t + b;
            t--;
            return -c / 2 * ( t * ( t - 2 ) - 1) + b;
        };

        const animation = function( currentTime ){
            if( startTime === null ) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease( timeElapsed, startPosition, targetPosition, duration );
            window.scrollTo( 0, run );
            if( timeElapsed < duration ) requestAnimationFrame( animation );
        };
        requestAnimationFrame( animation );
    };

    const scrollTo = function() {
        const links = document.querySelectorAll( ".js-scroll" );
        links.forEach( each => {
            each.addEventListener( "click", function () {
                const currentTarget = this.getAttribute( "href" );
                smoothScroll( currentTarget, 1000 );
            });
        });
    };
    scrollTo();
}());