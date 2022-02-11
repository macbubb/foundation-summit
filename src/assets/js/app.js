import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

jQuery(document).ready(function() {
	var offset = 250;
	var duration = 300;
	jQuery(window).scroll(function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.back-to-top').fadeIn(duration);
		} else {
		jQuery('.back-to-top').fadeOut(duration);
	}
});
 
jQuery('.back-to-top').click(function(event) {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
	})
});

$('#mce-MMERGE3-1').foundation('validateRadio', groupName);