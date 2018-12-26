function _0x64afxa() {
    if ($('body')['attr']('class')['indexOf']('home-5') != 5) {
        $('.header-top .block-cart')['before']($('.header-top .form-search')['detach']())
    };
    $('#all')['after']('<div id="mobile-menu">' + '<div class="mobile-menu-wrap">' + '<div class="close-mobile-menu">' + '<span class="close-menu"><i class="zmdi zmdi-close"></i></span>' + '</div>' + '</div>' + '</div>');
    $('#main-menu .menu')['detach']()['appendTo']('.mobile-menu-wrap');
    $('.mobile-menu-wrap .menu li.dropdown, .mobile-menu-wrap .menu li.dropdown-submenu')['each'](function() {
        $(this)['find']('a')['first']()['after']('<span class="icon-down"><i class="zmdi zmdi-chevron-down"></i></span>')
    });
    $('#toggle-mobile-menu')['on']('click', function(_0x64afxb) {
        _0x64afxb['preventDefault']();
        $('body')['toggleClass']('mainmenu-active');
        return false
    });
    $('.close-mobile-menu .close-menu')['on']('click', function(_0x64afxb) {
        _0x64afxb['preventDefault']();
        $('body')['removeClass']('mainmenu-active');
        return false
    });
    $('.icon-down')['on']('click', function(_0x64afxb) {
    	console.log("test");
        $(this)['closest']('li')['find']('.dropdown-menu')['first']()['toggleClass']('tiva-active');
        return false
    })
}

$(document)['ready'](function() {
            
    $('.go-up')['hide']();
    
    $(window)['on']('scroll', function() {
        if ($(this)['scrollTop']() > 400) {
            $('.go-up')['fadeIn']()
        } else {
            $('.go-up')['fadeOut']()
        };
        return false
    });
    
    $('.go-up a')['on']('click', function(_0x64afxb) {
        _0x64afxb['preventDefault']();
        $('html, body')['animate']({
            scrollTop: 0
        }, 600);
        return false
    });

    setTimeout(function() {
        $('#page-preloader')['fadeOut']()
    }, 2000);

    $('#toggle-topbar')['click'](function() {
        $(this)['parent']()['addClass']('active');
        $('.topbar-content')['slideDown'](100);
        $('#header')['css']('border-top', '0');
        $('#toggle-topbar')['hide']();
    	$('.close-topbar')['click'](function() {
            $('.close-topbar')['show']();
        });
        $(this)['parent']()['removeClass']('active');
        $('.topbar-content')['slideUp'](100);
        $('#toggle-topbar')['show']();
        $('#header')['css']('border-top', '8px solid #78b144');
        $('.close-topbar')['hide']()
    });
    if ($(window)['width']() <= 991) {
        _0x64afxa()
    };

    $('#tiva-slideshow')['nivoSlider']({
        effect: 'random',
        animSpeed: 1000,
        pauseTime: 5000,
        directionNav: true,
        controlNav: true,
        pauseOnHover: true
    });

    if ($('#price-filter')['length']) {
        $('#price-filter')['slider']({
        	from: 0,
        	to: 100,
        	step: 1,
        	smooth: true,
        	round: 0,
        	dimension: '&nbsp;',
            skin:'plastic '
        });
    }

    var _0x64afx4=jQuery('.contact - address ')['html']();
    var _0x64afxc='100 % ';
    var _0x64afxd='500 px ';
    var _0x64afx5=16;    
	
	$('.product-countdown')['each'](function(_0x64afx11) {
		var _0x64afx12=( typeof $(this)['attr']('data-date') != 'undefined') ? $(this)['attr']('data-date') : new Date();
		$(this)['countdown'](_0x64afx12, function(_0x64afx13) {
			var _0x64afx14 =_0x64afx13['offset']['totalDays'] * 24 + _0x64afx13['offset']['hours'];
			if ($(this)['closest']('.products-block')['attr']('class')['indexOf']('layout-2') !=  -1) {
				$(this)['html'](_0x64afx13['strftime'] (
					''
					+ '<div class="item"><img src="img/icon - countdown.png " alt="Countdown Image "><span class="number ">'
					+ _0x64afx14 
					+ '</span><span class="text ">Hours</span></div>'
					+ '<div class="item "><img src="img/icon - countdown.png " alt="Countdown Image "><span class="number ">%M</span><span class="text ">Minutes</span></div>'
					+ '<div class="item "><img src="img/icon - countdown.png " alt="Countdown Image "><span class="number ">%S</span><span class="text ">Seconds</span></div>'
				))
			} else {
				$(this)['html'](_0x64afx13['strftime'](
					''
					+ '<div class="item "><span class="text ">Hours</span><span class="number "><span>'
					+ _0x64afx14
					+ '</span></span></div>'
					+ '<div class="item "><span class="text ">Mins</span><span class="number "><span>%M</span></span></div>'
					+ '<div class="item "><span class="text ">Secs</span><span class="number "><span>%S</span></span></div>'))
			}
		})
	});

	$('.deals-of-day .products')['owlCarousel']({
		loop:true,
		margin:30,
		autoplay:true,
		nav:true,
		dots:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				navText:[
					'<i class="fa fa-long-arrow-left "></i>',
					'<i class="fa fa-long-arrow-right"></i>'
				]
			},
			480:{
				items:2,
				navText:[
					'<i class="fa fa-long-arrow-left "></i>',
					'<i class="fa fa-long-arrow-right"></i>'
				]
			},
			1025:{
				items:3,
				navText:[
					'<i class="fa fa-long-arrow-left "></i>',
					'<i class="fa fa-long-arrow-right"></i>'
				]
			}
		}
	});

	$('.best-sellers .products')['owlCarousel']({
		loop:true,
		margin:30,
		autoplay:true,
		nav:true,
		dots:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				navText:[
					'<i class="fa fa - angle - left "></i>',
					'<i class="fa fa - angle - right "></i>'
				]
			},
			480:{
				items:2,
				navText:[
					'<i class="fa fa - angle - left "></i>',
					'<i class="fa fa - angle - right "></i>'
				]
			},
			769:{
				items:4,
				navText:[
					'<i class="fa fa - angle - left "></i>',
					'<i class="fa fa - angle - right "></i>'
				]
			},
			1025:{
				items:6,
				navText:[
					'<i class="fa fa - angle - left "></i>',
					'<i class="fa fa - angle - right "></i>'
				]
			}
		}
	});

	$('.home-2 .new-arrivals .products')['owlCarousel']({
	    loop:true, margin:30, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 769: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 1025: {
	            items: 3, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	$('.home-1 .new-arrivals .products')['owlCarousel']( {
	    loop:true, margin:30, autoplay:true, nav:false, dots:true, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 2
	        }
	        , 991: {
	            items: 3
	        }
	    }
	});

	$('.home-3 .testimonial .testimonial-wrap')['owlCarousel']( {
	    loop:true, margin:50, autoplay:true, nav:false, dots:true, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 1
	        }
	        , 991: {
	            items: 3
	        }
	    }
	});

	$('.testimonial .testimonial-wrap')['owlCarousel']( {
	    loop: true, margin: 30, autoplay: true, nav: false, dots: true, autoplayTimeout: 5000, autoplayHoverPause: true, responsiveClass: true, items: 1
	});

	var _0x64afx15=($(window)['width']()<=1024)?10:30;
	var _0x64afx16=($(window)['width']()< 991)?true:false;

	$('.product-category .categories')['owlCarousel']({
	    margin:_0x64afx15, mouseDrag:_0x64afx16, touchDrag:_0x64afx16, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 3
	        }
	        , 991: {
	            items: 5
	        }
	    }
	});

	$('.partners .partners-wrap')['owlCarousel']({
	    loop:true, margin:30, autoplay:true, nav:false, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 2
	        }
	        , 480: {
	            items: 4
	        }
	        , 991: {
	            items: 6
	        }
	    }
	});

	$('.flash-deals .products')['owlCarousel']({
	    loop:true, margin:30, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 992: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	$('.category-tab .products')['owlCarousel']({
	    loop:true, autoplaytimeout:6000, margin:20, autoplay:true, nav:false, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 2
	        }
	        , 769: {
	            items: 3
	        }
	        , 1025: {
	            items: 4
	        }
	    }
	});

	$('.home-3 .category-double .products')['owlCarousel']( {
	    loop:true, autoplaytimeout:6000, margin:0, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 3, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 769: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 1025: {
	            items: 3, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	$('.category-double .products')['owlCarousel']( {
	    loop:true, autoplaytimeout:6000, margin:0, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 991: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	$('.home-3 .product-tab .products')['owlCarousel']( {
	    loop:true, margin:30, autoplay:true, nav:false, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 3
	        }
	        , 991: {
	            items: 4
	        }
	    }
	});

	$('.home-4 .product-tab .products')['owlCarousel']( {
	    loop:true, margin:30, autoplay:true, nav:false, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 3
	        }
	        , 769: {
	            items: 4
	        }
	        , 1025: {
	            items: 5
	        }
	    }
	});

	$('.home-5 .product-tab .products')['owlCarousel']( {
	    loop:true, margin:15, autoplay:true, nav:false, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1
	        }
	        , 480: {
	            items: 2
	        }
	        , 769: {
	            items: 3
	        }
	        , 1025: {
	            items: 5
	        }
	    }
	});

	$('.product-detail .horizontal .thumb-images')['owlCarousel']( {
	    loop: false, margin: 10, autoplay: false, nav: false, dots: false, mouseDrag: false, touchDrag: false, items: 4
	});

	if($('.product-detail .main-image img')['length']) {
	    $('.product-detail .main-image img')['elevateZoom']( {
	        zoomType: 'inner', cursor: 'crosshair', easing: true, scrollZoom: false
	    }
	    )
	}

	$('.product-detail .thumb-images img')['on']('click', function(_0x64afxb) {
	    $('.product-detail .main-image')['html']('<img class="img - responsive " src="'+ $(this)['attr ']('src ')+ '" alt="Product Image ">')['find']('img')['elevateZoom']( {
	        zoomType: 'inner', cursor: 'crosshair', easing: true, scrollZoom: false
	    }
	    );
	    return false
	});

	$('.related-products.item-4 .products')['owlCarousel']( {
	    loop:true, autoplaytimeout:6000, margin:30, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 991: {
	            items: 4, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	$('.related-products .products')['owlCarousel']( {
	    loop:true, autoplaytimeout:6000, margin:30, autoplay:true, nav:true, dots:false, autoplayTimeout:5000, autoplayHoverPause:true, responsiveClass:true, responsive: {
	        0: {
	            items: 1, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 480: {
	            items: 2, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	        , 991: {
	            items: 3, navText: ['<i class="fa fa-long-arrow-left "></i>', '<i class="fa fa-long-arrow-right"></i>']
	        }
	    }
	});

	if($('.newsletter-popup')['length']) {
	    if(screen['width']< 500) {
	        $('.newsletter-popup .popup')['css']('width', '80%')
	    }
	    $('html')['on']('click', function(_0x64afxb) {
	        if(_0x64afxb['target']['id']=='newsletter-popup') {
	            $('.newsletter-popup')['remove']()
	        }
	    }
	    );
	    $('.newsletter-popup .popup .close')['on']('click', function(_0x64afxb) {
	        _0x64afxb['preventDefault']();
	        $('.newsletter-popup')['remove']()
	    });
	    setTimeout(function() {
	        $('.newsletter-popup')['remove']()
	    }, 20*1000);
	}
});

var _0x64afx4=jQuery('.contact-address')['html']();
var _0x64afxc='100%';
var _0x64afxd='500px';
var _0x64afx5=16;

$('.product-countdown')['each'](function(_0x64afx11) {
    var _0x64afx12=( typeof $(this)['attr']('data-date')!='undefined')?$(this)['attr']('data-date'): new Date();
    $(this)['countdown'](_0x64afx12,
    function(_0x64afx13) {
        var _0x64afx14=_0x64afx13['offset']['totalDays']* 24+ _0x64afx13['offset']['hours'];
        if($(this)['closest']('.products-block')['attr']('class')['indexOf']('layout-2')!=-1) {
            $(this)['html'](_0x64afx13['strftime'](''+ '<div class="item "><img src="img / icon - countdown.png " alt="Countdown Image "><span class="number ">'+ _0x64afx14+ '</span><span class="text ">Hours</span></div>'+ '<div class="item "><img src="img / icon - countdown.png " alt="Countdown Image "><span class="number ">%M</span><span class="text ">Minutes</span></div>'+ '<div class="item "><img src="img / icon - countdown.png " alt="Countdown Image "><span class="number ">%S</span><span class="text ">Seconds</span></div>'))
        }
        else {
            $(this)['html'](_0x64afx13['strftime'](''+ '<div class="item "><span class="text ">Hours</span><span class="number "><span>'+ _0x64afx14+ '</span></span></div>'+ '<div class="item "><span class="text ">Mins</span><span class="number "><span>%M</span></span></div>'+ '<div class="item "><span class="text ">Secs</span><span class="number "><span>%S</span></span></div>'))
        }
    }
    )
});

$('.deals-of-day .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        1025: {
            items:3,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.best-sellers .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa - angle - left "></i>',
            '<i class="fa fa - angle - right "></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa - angle - left "></i>',
            '<i class="fa fa - angle - right "></i>']
        }
        ,
        769: {
            items:4,
            navText:['<i class="fa fa - angle - left "></i>',
            '<i class="fa fa - angle - right "></i>']
        }
        ,
        1025: {
            items:6,
            navText:['<i class="fa fa - angle - left "></i>',
            '<i class="fa fa - angle - right "></i>']
        }
    }
});

$('.home-2 .new-arrivals .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        769: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        1025: {
            items:3,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.home-1 .new-arrivals .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:2
        }
        ,
        991: {
            items:3
        }
    }
});

$('.home-3 .testimonial .testimonial-wrap')['owlCarousel']( {
    loop:true,
    margin:50,
    autoplay:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:1
        }
        ,
        991: {
            items:3
        }
    }
});

$('.testimonial .testimonial-wrap')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    items:1
});

var _0x64afx15=($(window)['width']()<=1024)?10:30;
var _0x64afx16=($(window)['width']()< 991)?true:false;

$('.product-category .categories')['owlCarousel']( {
    margin:_0x64afx15,
    mouseDrag:_0x64afx16,
    touchDrag:_0x64afx16,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:3
        }
        ,
        991: {
            items:5
        }
    }
});

$('.partners .partners-wrap')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:2
        }
        ,
        480: {
            items:4
        }
        ,
        991: {
            items:6
        }
    }
});

$('.flash-deals .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        992: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.category-tab .products')['owlCarousel']( {
    loop:true,
    autoplaytimeout:6000,
    margin:20,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:2
        }
        ,
        769: {
            items:3
        }
        ,
        1025: {
            items:4
        }
    }
});

$('.home-3 .category-double .products')['owlCarousel']( {
    loop:true,
    autoplaytimeout:6000,
    margin:0,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:3,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        769: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        1025: {
            items:3,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.category-double .products')['owlCarousel']( {
    loop:true,
    autoplaytimeout:6000,
    margin:0,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        991: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.home-3 .product-tab .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:3
        }
        ,
        991: {
            items:4
        }
    }
});

$('.home-4 .product-tab .products')['owlCarousel']( {
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:3
        }
        ,
        769: {
            items:4
        }
        ,
        1025: {
            items:5
        }
    }
});

$('.home-5 .product-tab .products')['owlCarousel']( {
    loop:true,
    margin:15,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1
        }
        ,
        480: {
            items:2
        }
        ,
        769: {
            items:3
        }
        ,
        1025: {
            items:5
        }
    }
});

$('.product-detail .horizontal .thumb-images')['owlCarousel']( {
    loop:false,
    margin:10,
    autoplay:false,
    nav:false,
    dots:false,
    mouseDrag:false,
    touchDrag:false,
    items:4
});

if($('.product-detail .main-image img')['length']) {
    $('.product-detail .main-image img')['elevateZoom']( {
        zoomType:'inner',
        cursor:'crosshair',
        easing:true,
        scrollZoom:false
    }
    )
}

$('.product-detail .thumb-images img')['on']('click', function(_0x64afxb) {
    $('.product-detail .main-image')['html']('<img class="img - responsive " src="'+ $(this)['attr ']('src ')+ '" alt="Product Image ">')['find']('img')['elevateZoom']( {
        zoomType:'inner',
        cursor:'crosshair',
        easing:true,
        scrollZoom:false
    });
    return false;
});

$('.related-products.item-4 .products')['owlCarousel']({
    loop:true,
    autoplaytimeout:6000,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        991: {
            items:4,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

$('.related-products .products')['owlCarousel']( {
    loop:true,
    autoplaytimeout:6000,
    margin:30,
    autoplay:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        0: {
            items:1,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        480: {
            items:2,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
        ,
        991: {
            items:3,
            navText:['<i class="fa fa-long-arrow-left "></i>',
            '<i class="fa fa-long-arrow-right"></i>']
        }
    }
});

if($('.newsletter-popup')['length']) {
    if(screen['width']< 500) {
        $('.newsletter-popup .popup')['css']('width',
        '80%')
    }

    $('html')['on']('click', function(_0x64afxb) {
        if(_0x64afxb['target']['id']=='newsletter-popup') {
            $('.newsletter-popup')['remove']()
        }
    });

    $('.newsletter-popup .popup .close')['on']('click', function(_0x64afxb) {
        _0x64afxb['preventDefault']();
        $('.newsletter-popup')['remove']()
    });

    setTimeout(function() {
        $('.newsletter-popup')['remove']()
    }, 20* 1000);
}