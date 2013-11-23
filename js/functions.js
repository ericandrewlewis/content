/**
 * Functionality specific to the Focus Theme.
 */

( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window );

	/**
	 * Arranges sidebar widgets vertically.
	 */
	if ( $.isFunction( $.fn.masonry ) ) {

		$( '.widget-area' ).masonry( {
			itemSelector: '.widget',
			gutterWidth: 20,
			isRTL: body.is( '.rtl' )
		} );
	}

	$( '.site-drawer-toggle' ).click( function() {
		if ( $( 'body' ).hasClass( 'site-drawer-open' ) ) {
			$( '.content-area, .site-drawer-toggle' ).animate(
				{ left: '0' },
				250
			);
			$('body').removeClass('site-drawer-open' );
		} else {
			$( '.content-area, .site-drawer-toggle' ).animate(
				{ left: '30rem' },
				250
			);
			$('body').addClass('site-drawer-open' );
		}

	});
} )( jQuery );