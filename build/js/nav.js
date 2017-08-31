/*function myFunction() {
    var x = document.getElementById('nav-icon3');
    x.classList.toggle('open');
}*/

/*$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});*/
$(document).ready(function(){
$( '#nav-icon3' ).on( 'click', function() {

  if ( $( '#nav-icon3' ).hasClass( 'open' ) ) {
   $( '#nav-icon3' ).removeClass( 'open' );
  } else {
   $( '#nav-icon3' ).addClass( 'open' );
  }

});
});