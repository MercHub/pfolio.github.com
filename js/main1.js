$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.element1').css ({
		'transform' : 'translate(0px, +'+ wScroll /2 +'%)'
	});

	$('.element').css ({
		'transform' : 'translate(0px, +'+ wScroll /2 +'%)'
	});

	$('.btn-1').css ({
		'transform' : 'translate(0px, +'+ wScroll /8 +'%)'
	});

	$('.alps').css ({
		'transform' : 'translate(0px, +'+ wScroll /5 +'%)'
	});

	$('.cloud1').css ({
		'transform' : 'translate(0px, -'+ wScroll /3 +'%)'
	});

	$('.mtZion').css ({
		'transform' : 'translate(0px, -'+ wScroll /120 +'%)'
	});

});


// auto-collapsing menu
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


// nav scrolling effect 

jQuery(document).ready(function(){

	"use strict";

	setBindings();

});


	// clicking menu with delay

	function setBindings () {
		$("header nav ul li a, header a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

			$("html body").animate({	
				scrollTop: $("#" + sectionID).offset().top
			},1000)	
		})
	}


jQuery(document).ready(function(){

	"use strict";

		/* carousel */

		$('#slider-carousel').carouFredSel({

			responsive:true,
			width: '100%',
			circurlar:true,
			scroll: {
				items:1,
				duration: 500,
				pauseOnHover: true
			},
			auto:true,
			items: {
				visible:{
					min:1,
					max:1
				},
			height:'variable'
			// width: 'variable'
			},
			// pagination:{
			// 	container:".sliderpager",
			// 	anchorBuilder: false
			// }
		});	

		/* end - carousel */



		/* nav scrolling - toggle  */

		$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>=900){
				$("header").addClass('secondary-dark-blue-bg');
			}
			else
				if($("header").hasClass('secondary-dark-blue-bg')){
					$("header").removeClass('secondary-dark-blue-bg');
				}
		});  

		/*  end - nav scrolling */

		// Typed.js

		$(function(){
	      $(".element").typed({
	        strings: ["Designer - Front-End Dev."],
	        typeSpeed: 100,
			showCursor: false,
	      });
	  });

		
	

		
		 // parallax
		 $(document).ready(function() {
		    $(window).stellar();
		    
		});

		// wow - animate 
              new WOW().init();
      
         // tipper
		 $(".tipped").tooltip({
			direction: "top"
		});

		  // Activate isotope in container
 
	    // $(".portfolio_items").isotope({
	    //     itemSelector: '.single_item',
	    //     layoutMode: 'fitRows',
	    // });
	    
	    // Add isotope click function
	    
	    // $('.portfolio_filter li').click(function(){
	    //     $(".portfolio_filter li").removeClass("active");
	    //     $(this).addClass("active");
	 
	    //     var selector = $(this).attr('data-filter');
	    //     $(".portfolio_items").isotope({
	    //         filter: selector,
	    //         animationOptions: {
	    //             duration: 750,
	    //             easing: 'linear',
	    //             queue: false,
	    //         }
	    //     });
	    //     return false;
	    // });



	    $(function() {
		    $('.portfolio_filter li').click(function() {
		        $('.portfolio_filter li').removeClass('active');
		        $(this).addClass('active');
		    });

		});

});

	



//accordion
	$(function(){
		$('.accordion-content').hide(); //hide all contents
			$('.accordion-title:first').next().slideDown(); //show first instance of contents
			
			$('.accordion-title').click(function(){
				if( $(this).next().is(':hidden') ) {
				$('.accordion-title').next().slideUp();
				//triggers the hiding of contents
				$(this).next().slideDown();
				//triggers slide down of contents
				}
				return false; //prevents browser default
			});

	}); 



	$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>=700){
				jQuery(document).ready(function(){
					jQuery('.skillbar').each(function(){
						jQuery(this).find('.skillbar-bar-child').animate({
							width:jQuery(this).attr('data-percent')
						},6000);
					});
				});
			}
		}); 



	

	$(document).ready(function(){

		// hide #back-top first
		$("#back-top").hide();
		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 3000) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		});

	});








