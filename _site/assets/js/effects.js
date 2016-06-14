'use strict';
/*
	effects.js

	Contains the functionality for the scrolling fixed menu
	and the popup menu toggle

*/
$(document).ready(function(){


	/* Menu Pop up Toggle */	
	$('#popmenu').click( function(){
		$('#popup-menu').toggle('hide');
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
    //if (window.matchMedia("(min-width: 400px)").matches) {
        if($(window).scrollTop() > 35) {
            $('header').css('background-color', '#fff');
        } else {
            $('header').css('background-color', 'transparent');
        }    
    //} else {
            //do nothing
    //}

	});




});

