'use strict';
/*
	effects.js

	Contains the functionality for the scrolling fixed menu
	and the popup menu toggle

*/
$ = jQuery;
$(document).ready(function(){


	/* Menu Pop up Toggle */
	$('.menu-trigger').click( function(e){
        e.preventDefault();
		$('#popup-menu').toggle('hide');
        $('.menu-trigger').toggleClass('close-trigger');
	});




	/* Smooth Scrolling */
	$(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    });

	/* Scroll Effect - can elements at different positions */
	$(window).on("scroll", function() {
	    if ($(window).scrollTop() > 35) {
	        $('#site-header').addClass('top-bar--opaque');
	    } else {
            $('#site-header').removeClass('top-bar--opaque');
	    }
	    if ($(window).scrollTop() > window.innerHeight/4) {
	        $('body').addClass('blur-bg');
	    } else {
            $('body').removeClass('blur-bg');
	    }
	});





});
