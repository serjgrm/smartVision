equalheight = function (container) {
	
	var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
	$(container).each(function () {
		
		$el = $(this);
		$($el).height('auto')
		topPostion = $el.offset().top;
		
		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
			} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
equalwidth = function (container) {
	var greatestWidth = 0;   // Stores the greatest width
	
	$(container).each(function () {    // Select the elements you're comparing
		$el = $(this);
		$($el).css('min-width', 0);
		
		var theWidth = $(this).innerWidth();   // Grab the current width
		
		if (theWidth > greatestWidth) {   // If theWidth > the greatestWidth so far,
			greatestWidth = theWidth;     //    set greatestWidth to theWidth
		}
	});
	
	$(container).css('min-width', greatestWidth);
}



$(document).ready(function () {
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		$('a.viber_tel').each(function () {
			var url = $(this).attr('href');
			var ind = url.indexOf("%2");
			if (~ind) {
				$(this).attr('href', url.substring(0, ind) + url.substring(ind + 3));
				
			}
		});
		//console.log($('a.viber_ico').attr('href').indexOf("%2b"));
	}
	
	
	//$('.custom-scroll').each(element, new SimpleBar);
	$('.custom-scroll').each(function (indx, element) {
		new SimpleBar($(element)[0], { autoHide: false });
	});
	//.scrol
	
	$('#portfolio_front_slider .swiper-wrapper').html($('.portfolio_front_cols').html());
	$('#portfolio_front_slider .swiper-wrapper>div').removeAttr('class').addClass('swiper-slide');
	var swiper = new Swiper('#portfolio_front_slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		//centeredSlides: true,
		lope: true,
		pagination: {
			el: '#portfolio_slider_nav .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '#portfolio_slider_nav .swiper-button-next',
			prevEl: '#portfolio_slider_nav .swiper-button-prev',
		},
		breakpoints: {
			
			768: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
	});
	
	$('#team .swiper-wrapper').html($('#team .team_cols').html());
	$('#team .swiper-wrapper>div').removeAttr('class').addClass('swiper-slide');
	var teamswiper = new Swiper('#team_slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		//centeredSlides: true,
		lope: true,
		pagination: {
			el: '#team .slider_nav .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '#team .slider_nav .swiper-button-next',
			prevEl: '#team .slider_nav .swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});
	var news_swiper = new Swiper('#news_slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		//centeredSlides: true,
		lope: true,
		pagination: {
			el: '.news_slider_wr .slider_nav .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '#news_slider + .slider_nav .swiper-button-next',
			prevEl: '#news_slider + .slider_nav .swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
	});
	if($('.portfolio_screenshots').length) {
	var portfolio_swiper = new Swiper('.portfolio_screenshots', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		//centeredSlides: true,
		lope: true,
		effect: 'fade',
	});
	
	portfolio_swiper.slideTo(1);
	}
	$('.psliderto').click(function (event) {
		event.preventDefault();
		$('.psliderto').not(this).removeClass('current');
		$(this).addClass('current');
		$('html, body').stop().animate({ scrollTop: ($('.portfolio_screenshots').offset().top - $('.header').outerHeight() - 90) }, 1000);
		portfolio_swiper.slideTo($(this).data('item_id'));
	});
	
	// $('.portfolio_front .portfolio_item').hover(function(){       
	//     $(this).children('.cont').height($(this).outerHeight());
	// }, function(){
	//     $(this).children('.cont').removeAttr('style');    
	// });
	
	equalheight('.pricing .price_item .item_title');
	equalheight('.pricing .price_item .description');
	equalheight('.blog_item .img');
	equalwidth('.footer_contacts > div');
	
	$(".menu-btn a").click(function () {
		$("#main_menu").fadeToggle(200);
		console.log('test');
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
	$(".close_overlay_button").click(function () {
		$(this).parents('.overlay').fadeOut(200);
	});
	$(".switch_overlay_color").click(function () {
		var item_title = $(this).attr('title');
		$(this).attr('title', $(this).data('title')).data('title', item_title);
		$(this).parents('.overlay').toggleClass('blue white');
	});
	$(".open_overlay_button").click(function (event) {
		event.preventDefault();
		$($(this).attr("href")).fadeIn(200);
	});
	
	$('.portfolio_filter .fillter-toggle').click(function (event) {
		event.preventDefault();
		$(this).fadeOut(200).siblings('.button-list').fadeOut(0).children('.row').removeClass('d-none')
		//setTimeout(function () {
		$(this).siblings('.button-list').slideDown(400);
		//}, 10);
	});
	
	var lang = $('html').attr('lang');
	if(lang == 'ru'){
		$(".return-lvl a").text('Вернуться назад');
		}else if(lang == 'ua'){
		$(".return-lvl a").text('Повернутися назад');
		}else if(lang == "en"){
		$(".return-lvl a").text('Come back');
	}
	$('.menu .top-lvl .sub').siblings('a').on('click', function () {
		//$(this).parents(".top-lvl").slideUp(400).siblings(".sub-lvl").empty().html($(this).siblings('.sub').clone()).slideDown(400);
		var target = $(this).parents(".top-lvl").addClass("move").siblings(".sub-lvl");
		$(target).empty().html($(this).siblings('.sub').clone());
		$(target).prepend("<div class='col'><div class='sect_title'>" + $(this).text() + "</div></div>");
		$(target).append($(".return-lvl").clone()).addClass("move");
		setTimeout(function () {
			$(target).find(".sect_title").addClass('animate');
		}, 1);
		$('.menu .sub-lvl .return-lvl a').on('click', function () {
			//$('.menu .top-lvl').slideDown(400).siblings(".sub-lvl").empty().hide(0); 
			$('.menu .top-lvl').removeClass("move").siblings(".sub-lvl").empty().removeClass("move");
		});
	});
	
	$('form.styled input, form.styled textarea').on('blur', function () {
		$(this).parent().removeClass('focus');
		}).on('focus', function () {
		$(this).parent().addClass('focus');
	});
	
	
	
});

$(window).resize(function () {
	equalheight('.pricing .price_item .item_title');
	equalheight('.pricing .price_item .description');
	equalheight('.blog_item .img');
	equalwidth('.footer_contacts > div');
});



$('.go_up').click(function () {
	$('body, html').animate({
		scrollTop: 0
	}, 600);
});


var top_show = 150;
var delay = 1000;

$(window).scroll(function () {
	if ($(this).scrollTop() > top_show){
		$('.go_up').fadeIn();
		$('.mess_ico').addClass('to_down');
		}else{ 
		$('.go_up').fadeOut();
		$('.mess_ico').removeClass('to_down');
		//$('.popup-container').removeClass('open');
		//$('#popup_show').removeClass('mess-active');
	}	
	
	
	if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		$('.b24-widget-button-wrapper').addClass('docked');
		$('.page_buttons').addClass('docked');
		}else{
		$('.page_buttons').removeClass('docked');
		$('.b24-widget-button-wrapper').removeClass('docked');
	}
});

$('.open_spoiler').click(function(){
	$('.spoiler-body').css('display', 'flex');
	$(this).css({'display':'none'});
return false;
});



$('.fancybox_inline').removeAttr('onclick');
$('.fancybox_inline').fancybox({
	padding: 30,
	margin: 22,
	minWidth: 460,
	//modal: true,
	closeBtn: true,
	
	
	autoFocus :true,
	clickSlide : 'false',
	clickOutside : 'false',
	type : 'inline',
	"touch":false,
	
	wrapCSS: "fancy_inline",
	helpers : {
		overlay : {
			closeClick : false,
		}
	}
});


$('.fancybox').fancybox({
	buttons : [
		'slideShow',
		//'fullScreen',
		'thumbs',
		//'share',
		//'download',
		'zoom',
		'close'
	],
	
	lang : i18n_lang_id,
	i18n : {
		'en' : {
			CLOSE       : 'Close',
			NEXT        : 'Next',
			PREV        : 'Previous',
			ERROR       : 'The requested content cannot be loaded. <br/> Please try again later.',
			PLAY_START  : 'Start slideshow',
			PLAY_STOP   : 'Pause slideshow',
			FULL_SCREEN : 'Full screen',
			THUMBS      : 'Thumbnails',
			DOWNLOAD    : 'Download',
			SHARE       : 'Share',
			ZOOM        : 'Zoom'
		},
		'ru' : {
			CLOSE       : 'Закрыть',
			NEXT        : '',
			PREV        : '',
			ERROR       : 'Запрошенный контент не может быть загружен. <br/>  Пожалуйста, повторите попытку позже.',
			PLAY_START  : 'Начать слайдшоу',
			PLAY_STOP   : 'Остановить слайдшоу',
			FULL_SCREEN : 'На весь экран',
			THUMBS      : 'Миниатюры',
			DOWNLOAD    : 'Скачать',
			SHARE       : 'Поделиться',
			ZOOM        : 'Увеличить'
		},
		'ua' : {
			CLOSE       : 'Закрити',
			NEXT        : '',
			PREV        : '',
			ERROR       : 'Контент не може бути завантажений. <br/>  Будь ласка, спробуйте пізніше.',
			PLAY_START  : 'Почати слайдшоу',
			PLAY_STOP   : 'Зупинити слайдшоу',
			FULL_SCREEN : 'На весь екран',
			THUMBS      : 'Мініатюри',
			DOWNLOAD    : 'Завантажити',
			SHARE       : 'Поділитися',
			ZOOM        : 'Збільшити'
		}
	}
});



$('.fancybox_inline').click(function () {
	
	var nameForm = $(this).parent().parent().find('.promo_text').text();
	$('#inline_form').find('h2').text(nameForm);
	$("input[name='form_text_91']").val(nameForm);
	
});


$(document).ready(function() {
    $('.faq_list .item_title').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.item_body').slideUp(400)
			}else{
            $('.faq_list .item_title').removeClass('active');
            $('.faq_list .item_body').slideUp(400);
            $(this).addClass('active').next('.item_body').slideDown(400);
		}
	});
});


$('body').on('click', '.main-slider__down', function(){
	if( $('.services_bg').length )
	{
		$('html, body').animate({
			scrollTop: $(".services_bg").offset().top - 94
		}, 500);
	}
});


$(".masked_phone_inp").inputmask("+38(999) 999-99-99");
BX.addCustomEvent('onAjaxSuccess', function() {
	$(".masked_phone_inp").inputmask("+38(999) 999-99-99");
});


$(".levels").slider({
	value:$(".selected_level").attr('value'),
	min: 0,
	max: 10,
	step: 1,
	animate: true,
	range: "min",
	change: function( event, ui ) {    //это обработчик изменения положения ползунка...
		$( ".values li" ).removeClass().eq($(".levels").slider("value")).addClass("current");
		$(".selected_level").attr('value', $(".levels").slider("value"));
	}
});
//Применяем стандартный ползунок из UI

//Этот кусок обрабатывает клики по циферкам благодяря чему ползунок выставляется в нужную позицию
$(".values").delegate("li", "click", function(){
	$(".levels").slider( "option", "value", $(this).text());
});
//Этот кусок обрабатывает клики по циферкам благодяря чему ползунок выставляется в нужную позицию

//Этот кусок выводит цыклом цифры под ползунком
var levels_margin = "";
for (var i = 0; i < 11; i++) {
	if (i<10){
		levels_margin = i*0.8;
		}else{
		levels_margin = i*1.2;
	}
	if( $(".levels").slider("value")!=i )
	$( ".values" ).html($( ".values" ).html()+"<li style='position:absolute; left: "+(i*10)+"%; margin-left:-"+levels_margin+"px;'>"+i+"</li>");
	else
	$( ".values" ).html($( ".values" ).html()+"<li class='current' style='position:absolute; left: "+(i*10)+"%; margin-left:-"+levels_margin+"px;'>"+i+"</li>");
}

$('.big_form input').styler();