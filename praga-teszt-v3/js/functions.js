
// var navbar = document.getElementById("nav-main");
// var navbarInner = document.getElementById("navbar_inner_wrapper");
// var sticky = navbar.offsetTop - 44;
// jQuery(function($){

// 	$(document).ready(function(){
		
// 		(function (root, factory) {
//             if (typeof define === 'function' && define.amd) {
//                 define(['exports'], factory);
//             } else if (typeof exports !== 'undefined') {
//                 factory(exports);
//             } else {
//                 factory((root.dragscroll = {}));
//             }
//         }(this, function (exports) {                
//             var _window = window;
//             var _document = document;
//             var mousemove = 'mousemove';
//             var mouseup = 'mouseup';
//             var mousedown = 'mousedown';
//             var EventListener = 'EventListener';
//             var addEventListener = 'add'+EventListener;
//             var removeEventListener = 'remove'+EventListener;
//             var newScrollX, newScrollY;
        
//             var dragged = [];
//             var reset = function(i, el) {
//                 for (i = 0; i < dragged.length;) {
//                     el = dragged[i++];
//                     el = el.container || el;
//                     el[removeEventListener](mousedown, el.md, 0);
//                     _window[removeEventListener](mouseup, el.mu, 0);
//                     _window[removeEventListener](mousemove, el.mm, 0);
//                 }
        
//                 dragged = [].slice.call(_document.getElementsByClassName('navbar'));
//                 for (i = 0; i < dragged.length;) {
//                     (function(el, lastClientX, lastClientY, pushed, scroller, cont){
//                         (cont = el.container || el)[addEventListener](
//                             mousedown,
//                             cont.md = function(e) {
//                                 if (!el.hasAttribute('nochilddrag') ||
//                                     _document.elementFromPoint(
//                                         e.pageX, e.pageY
//                                     ) == cont
//                                 ) {
//                                     pushed = 1;
//                                     lastClientX = e.clientX;
//                                     lastClientY = e.clientY;
        
//                                     e.preventDefault();
//                                 }
//                             }, 0
//                         );
        
//                         _window[addEventListener](
//                             mouseup, cont.mu = function() {pushed = 0;}, 0
//                         );
        
//                         _window[addEventListener](
//                             mousemove,
//                             cont.mm = function(e) {
//                                 if (pushed) {
//                                     (scroller = el.scroller||el).scrollLeft -=
//                                         newScrollX = (- lastClientX + (lastClientX=e.clientX));
//                                     scroller.scrollTop -=
//                                         newScrollY = (- lastClientY + (lastClientY=e.clientY));
//                                     if (el == _document.body) {
//                                         (scroller = _document.documentElement).scrollLeft -= newScrollX;
//                                         scroller.scrollTop -= newScrollY;
//                                     }
//                                 }
//                             }, 0
//                         );
//                      })(dragged[i++]);
//                 }
//             }
        
              
//             if (_document.readyState == 'complete') {
//                 reset();
//             } else {
//                 _window[addEventListener]('load', reset, 0);
//             }
        
//             exports.reset = reset;
        
//         }));
		    
//         $(window).scroll(function () {
//             stickyMenuFunction();
			
// 			let scrollTop = $(this).scrollTop();
// 			let navItemLength = $('#nav-main .navbar a.nav-item').length;
			
// 			$('#nav-main .navbar a.nav-item').each(function (index, el) {
// 				let divId = $(el).data('div-to-show');
// 				let divTopErtek = $("body").find("[data-realid='" + divId +"']").offset().top - 60;
// 				let divBottomErtek = divTopErtek + $("body").find("[data-realid='" + divId +"']").height() - 60;
// 				if ( divTopErtek <= scrollTop && scrollTop <= divBottomErtek && !$(this).hasClass('active_nav')){
// 					$(this).siblings('a.nav-item').removeClass('active_nav');
// 					$(this).addClass('active_nav');
// 					$(this).closest('.navbar').animate({
// 						scrollLeft: $('.active_nav').position().left - 4
// 					}, 500);
// 				}
// 			});
			
// 			if ( scrollTop <= $("body").find("[data-realid='aktualis']").offset().top - 60){
// 				$('#nav-main .navbar a.nav-item').removeClass('active_nav');
// 			}
			
// 			if ( scrollTop >= $("body").find("[data-realid='magenta']").offset().top + $("body").find("[data-realid='magenta']").height() ){
// 				$('#nav-main .navbar a.nav-item').removeClass('active_nav');
// 			}
			
//         });

//         $(window).resize(function () {
//             sticky = navbar.offsetTop - 44;
//         });
        
//         if (window.location.hash) {
//             var kategoria = window.location.hash.substr(1);
//             $('html,body').animate({
//                 scrollTop: $("body").find("div.[data-realid='" + kategoria +"']").offset().top - 59
//             }, 'slow');
//         }
// 	});
// });

// function menuToSection(hova){
//     jQuery(function($){
//         var kategoria = hova;
//         $('html,body').animate({
//             scrollTop: $("body").find("div[data-realid='" + kategoria +"']").offset().top
//         }, 'slow');
//     });
// }

// function stickyMenuFunction() {
// 	jQuery(function($){
// 		if (window.pageYOffset >= sticky) {
// 			navbarInner.classList.add("inwb_sticky");
// 		} else {
// 			navbarInner.classList.remove("inwb_sticky");
// 		}
//     });
// }

var navbar = document.getElementById("nav-main");
var navbarInner = document.getElementById("navbar_inner_wrapper");
var sticky = navbar.offsetTop;

$(window).scroll(function () {
	stickyMenuFunction();
	 let scrollTop = $(this).scrollTop();
	let navItemLength = $('#nav-main .navbar a.nav-item').length;


	$('#nav-main .navbar a.nav-item').each(function (index, el) {
		let divId = $(el).data('div-to-show');
		let divTopErtek = $("body").find("[data-realid='" + divId +"']").offset().top - 120;
		let divBottomErtek = divTopErtek + $("body").find("[data-realid='" + divId +"']").height() - 120;
		if ( divTopErtek <= scrollTop && scrollTop <= divBottomErtek && !$(this).hasClass('active_nav')){
			$(this).siblings('a.nav-item').removeClass('active_nav');
			$(this).addClass('active_nav');
			$(this).closest('.navbar').animate({
				scrollLeft: $('.active_nav').position().left - 4
			}, 500);
		}
		
		
	});

	if ( scrollTop <= $("body").find("[data-realid='home']").offset().top - 120){
		$('#nav-main .navbar a.nav-item').removeClass('active_nav');
	}
	
	if ( scrollTop >= $("body").find("[data-realid='elerhetoseg']").offset().top + $("body").find("[data-realid='elerhetoseg']").height() ){
		$('#nav-main .navbar a.nav-item').removeClass('active_nav');
	}
	
});
// sticky menu
function stickyMenuFunction() {
	jQuery(function($){
		if (window.pageYOffset >= sticky) {
			navbarInner.classList.add("inwb_sticky");
		} else {
			navbarInner.classList.remove("inwb_sticky");
		}
	});
}

// menutosection
function menuToSection(hova){
    jQuery(function($){
        var kategoria = hova;
        var hovascroll = $("body").find("[data-realid='" + kategoria +"']").offset().top -100;
		$('html,body').animate({
            scrollTop: hovascroll
        }, 'slow');
    });
}

jQuery(function($){

	$(document).ready(function(){

$('#programok_carousel').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	centerMode: true,
	responsive: [
	  {
		breakpoint: 960,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  centerMode: true,
		  variableWidth: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 500,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  variableWidth: true
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

  $('#pubs_carousel').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	centerMode: true,
	responsive: [
	  {
		breakpoint: 960,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  centerMode: true,
		  variableWidth: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 500,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  variableWidth: true
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
  $('.auto_flex_cont').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	centerMode: true,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: true,
		  variableWidth: true,
		}
	  },
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
  

  $('#prague_image_carousel').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true,
	autoplay: true,
  	autoplaySpeed: 2000,
	  responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			variableWidth: false,
		  }
		},
		{
			breakpoint: 768,
			settings: {
			  variableWidth: false,
			  arrows: false,
			  dots: true
			}
		  },
	  ]
  });

	})
});	


// Get the modal
var modal = document.getElementById("myModal01");
var modal2 = document.getElementById("myModal02");
var modal3 = document.getElementById("myModal03");
var modal4 = document.getElementById("myModal04");
var modal5 = document.getElementById("myModal05");
var modal6 = document.getElementById("myModal06");
var modal7 = document.getElementById("myModal07");
var modal8 = document.getElementById("myModal08");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg01");
var img2 = document.getElementById("myImg02");
var img3 = document.getElementById("myImg03");
var img4 = document.getElementById("myImg04");
var img5 = document.getElementById("myImg05");
var img6 = document.getElementById("myImg06");
var img7 = document.getElementById("myImg07");
var img8 = document.getElementById("myImg08");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");
var modalImg7 = document.getElementById("img07");
var modalImg8 = document.getElementById("img08");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function(){
	modal2.style.display = "block";
	modalImg2.src = this.src;
  }
  img3.onclick = function(){
	modal3.style.display = "block";
	modalImg3.src = this.src;
  }
  img4.onclick = function(){
	modal4.style.display = "block";
	modalImg4.src = this.src;
  }
  img5.onclick = function(){
	modal5.style.display = "block";
	modalImg5.src = this.src;
  }
  img6.onclick = function(){
	modal6.style.display = "block";
	modalImg6.src = this.src;
  }
  img7.onclick = function(){
	modal7.style.display = "block";
	modalImg7.src = this.src;
  }
  img8.onclick = function(){
	modal8.style.display = "block";
	modalImg8.src = this.src;
  }


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
span2.onclick = function() { 
	modal2.style.display = "none";
  }
  span3.onclick = function() { 
	modal3.style.display = "none";
  }
  span4.onclick = function() { 
	modal4.style.display = "none";
  }
  span5.onclick = function() { 
	modal5.style.display = "none";
  }
  span6.onclick = function() { 
	modal6.style.display = "none";
  }
  span7.onclick = function() { 
	modal7.style.display = "none";
  }
  span8.onclick = function() { 
	modal8.style.display = "none";
  }