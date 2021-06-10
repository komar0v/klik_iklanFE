function minimize_sidebar(){
	if (document.getElementById("sidebar")) {    
		document.getElementById("sidebar").setAttribute("id", "sidebar_min");

		document.getElementById("icn_text_home").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/home_icon.svg"></span>';
		document.getElementById("icn_text_message").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/message_icon.svg"></span>';
		document.getElementById("icn_text_trx").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/transaction_icon.svg"></span>';
		document.getElementById("icn_text_support").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/support_icon.svg"></span>';
	}
	else {
		document.getElementById("sidebar_min").setAttribute("id", "sidebar");
		document.getElementById("icn_text_home").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/home_icon.svg"></span>Home';
		document.getElementById("icn_text_message").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/message_icon.svg"></span>Message';
		document.getElementById("icn_text_trx").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/transaction_icon.svg"></span>Transaction';
		document.getElementById("icn_text_support").innerHTML = '<span><img width="25" height="25" src="../assets/images/icons/support_icon.svg"></span>Support';
	}
}

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebar_mobile').on('click', function () {
      $('#sidebar').toggleClass('active');
  	});

})(jQuery);