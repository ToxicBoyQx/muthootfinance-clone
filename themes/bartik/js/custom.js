function toggleIcon(e){"use strict";$(e.target).prev(".panel-heading").find(".more-less").toggleClass("zmdi-plus zmdi-minus")}$(document).ready(function(){"use strict";$(".scroll-link").on("click",function(e){e.preventDefault();var s,a=$(this).attr("data-id");s=$("#"+a).offset().top-72,$("html,body").animate({scrollTop:s},1e3)}),$(".hamburger").click(function(){$(this).toggleClass("open"),$(".navbar-collapse").toggleClass("open")}),$(".quick_link").click(function(){$(".quick_access").addClass("show")}),$(".close_qa").click(function(){$(".quick_access").removeClass("show")}),$(".navbar-nav > li.search a").click(function(){$(".desktop_search").addClass("show")}),$(".close_search").click(function(){$(".desktop_search").removeClass("show")}),$(".head_list li.search a").click(function(){$(".mobile_search").addClass("show")}),$(".cancel_search").click(function(){$(".mobile_search").removeClass("show")}),$(".navbar-nav > li.search > a").click(function(){$(".nav_list").css({position:"relative"})}),$(".desktop_search .close_search").click(function(){setTimeout(function(){$(".nav_list").css({position:"static"})},600)}),$(".navbar-nav > li.dropdown > a").click(function(){$(".dropdown_backdrop").toggleClass("on")}),$(document).click(function(){$(".dropdown_backdrop").hasClass("on")&&$(".dropdown_backdrop").removeClass("on")}),$(".nav_list > li.sm_dropdown > a").click(function(){$(this).next("ul").is(":visible")?$(this).next("ul").slideUp():($(".nav_list > li > .sm_dropdown_menu").slideUp(),$(this).next("ul").slideDown())}),$(".nav_list > li > a").click(function(e){$(".nav_list > li.active").removeClass("active"),$(this).parent().addClass("active")}),$(".sc_carousel").owlCarousel({margin:40,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,loop:!0,lazyLoad:!0,responsive:{0:{items:1.4,loop:!0,center:!0,margin:10,callbacks:!0,URLhashListener:!0,startPosition:"URLHash"},768:{items:2},1024:{items:3},1025:{items:3}}}),$(".nm_carousel").owlCarousel({margin:16,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1},480:{items:1},768:{items:1},1025:{items:1}}}),$(".csr_carousel").slick({slidesToShow:3,slidesToScroll:1,autoplaySpeed:2e3,arrows:!0,vertical:!0,verticalSwiping:!0}),$(".scheme_carousel").slick({slidesToShow:2,slidesToScroll:1,infinite:!1,arrows:!0,vertical:!0,verticalSwiping:!0}),$(".gs_carousel").owlCarousel({margin:40,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-up"></i>','<i class="fa fa-angle-down"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1},480:{items:1},768:{items:2,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']},1024:{items:3,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],margin:20},1441:{items:3}}}),$(".gs_carousel_mb").owlCarousel({margin:15,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!1,dots:!1,loop:!0,lazyLoad:!0,responsive:{0:{items:1.5,margin:15},768:{items:1},1024:{items:1},1025:{items:1}}}),$(".sp_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1},480:{items:2},768:{items:4},1024:{items:5},1025:{items:7}}}),$(".banner_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!0,autoplayTimeout:15e3,smartSpeed:1e3,nav:!1,dots:!0,loop:!0,lazyLoad:!0,animateOut:"fadeOut",mouseDrag:!1,responsive:{0:{items:1},767:{items:1},1024:{items:1},1025:{items:1}}}),$(".mb_carousel").owlCarousel({margin:10,responsiveClass:!0,autoplay:!1,autoplayTimeout:6e3,smartSpeed:1e3,nav:!1,dots:!0,loop:!1,lazyLoad:!0,stagePadding:30,responsive:{0:{items:1},767:{items:1}}}),$(".media_carousel").owlCarousel({margin:40,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!1,dots:!1,loop:!0,lazyLoad:!0,responsive:{0:{items:1.5,margin:10},768:{items:2},1024:{items:3},1025:{items:3}}}),$(".bottom_fixed .close_popup").click(function(){$(".bottom_fixed").css({"box-shadow":"none",bottom:"-80px"})}),$(".stat_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1,nav:!1,loop:!0,autoplay:!0},768:{items:3},1024:{items:4}}}),$(".sr_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1,nav:!0,loop:!0},768:{items:3},1024:{items:3},1280:{items:4}}}),$(".security_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,mouseDrag:!1,responsive:{0:{items:1,nav:!0,loop:!1,mouseDrag:!0},768:{items:2,mouseDrag:!0},1024:{items:3,mouseDrag:!0},1280:{items:4}}}),$(".award_carousel").owlCarousel({margin:1,responsiveClass:!0,autoplay:!0,autoplayTimeout:6e3,smartSpeed:1e3,nav:!1,dots:!0,loop:!1,lazyLoad:!0,responsive:{0:{items:1},480:{items:1},768:{items:1},1024:{items:1}}}),$(".ng_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1.4,nav:!1,loop:!0},768:{items:3},1024:{items:3},1280:{items:4}}}),$(".pillar_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!0,loop:!1,lazyLoad:!0,responsive:{0:{items:1,nav:!1},768:{items:1,nav:!1},1024:{items:1},1280:{items:1}}}),$(".ci_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:15e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,mouseDrag:!1,responsive:{0:{items:1.3,mouseDrag:!0,loop:!0,nav:!1},768:{items:2.2,mouseDrag:!0,loop:!0,nav:!1},1023:{items:2.2,mouseDrag:!0,loop:!0,nav:!1},1024:{items:3},1025:{items:3}}}),$(".ka_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1,nav:!0,loop:!0},768:{items:3},1024:{items:3},1280:{items:4}}}),$(".ka_carousel2").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!0,lazyLoad:!0,responsive:{0:{items:1},768:{items:1},1024:{items:1},1280:{items:1}}}),$(".ms_carousel").slick({slidesToShow:7,slidesToScroll:3,autoplay:!0,autoplaySpeed:5e3,speed:0,infinite:!0,arrows:!1,pauseOnHover:!1,cssEase:"ease",centerMode:!0,responsive:[{breakpoint:1023,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:479,settings:{slidesToShow:1}}]}),$(".director_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1},768:{items:1},1024:{items:1},1280:{items:1}}}),$(".tj_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1.6,nav:!1,loop:!0},768:{items:3},1024:{items:4},1281:{items:5}}}),$(".associates_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,smartSpeed:1e3,nav:!1,dots:!0,loop:!1,lazyLoad:!0,responsive:{0:{items:1.6,nav:!1,loop:!0},768:{items:3},1024:{items:4}}}),$(".crc_carousel").owlCarousel({margin:20,responsiveClass:!0,autoplay:!1,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:2},768:{items:3},1024:{items:4},1281:{items:4}}}),$(".mb_carousel_inner").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:6e3,smartSpeed:1e3,nav:!1,dots:!0,loop:!1,lazyLoad:!0,responsive:{0:{items:1},767:{items:1}}}),$(".gls_carousel").owlCarousel({margin:15,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!1,dots:!1,loop:!0,lazyLoad:!0,responsive:{0:{items:1.2,margin:15},768:{items:1},1024:{items:1},1025:{items:1}}}),$(".product_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1.2,nav:!1,loop:!0},768:{items:3},1024:{items:3},1281:{items:4}}}),$(".md_carousel").owlCarousel({margin:0,responsiveClass:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],dots:!1,loop:!1,lazyLoad:!0,mouseDrag:!1,responsive:{0:{items:1.3,nav:!1,loop:!0,mouseDrag:!0},768:{items:2,mouseDrag:!0},1024:{items:3,mouseDrag:!0},1280:{items:3}}}),$(".basic_select").selectric(),$(".custom_scroll").mCustomScrollbar({theme:"dark-3"})}),$(".modal").each(function(){$(this).on("show.bs.modal",function(){var e=$(this).attr("data-easein");"shake"==e?$(".modal-dialog").velocity("callout."+e):"pulse"==e?$(".modal-dialog").velocity("callout."+e):"tada"==e?$(".modal-dialog").velocity("callout."+e):"flash"==e?$(".modal-dialog").velocity("callout."+e):"bounce"==e?$(".modal-dialog").velocity("callout."+e):"swing"==e?$(".modal-dialog").velocity("callout."+e):$(".modal-dialog").velocity("transition."+e)})}),$(".panel-group").on("hidden.bs.collapse",toggleIcon),$(".panel-group").on("shown.bs.collapse",toggleIcon);var scroll=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},elementsToShow=document.querySelectorAll(".show-on-scroll");function loop(){Array.prototype.forEach.call(elementsToShow,function(e){isElementInViewport(e)?e.classList.add("is-visible"):e.classList.remove("is-visible")}),scroll(loop)}function isElementInViewport(e){"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var s=e.getBoundingClientRect();return s.top<=0&&s.bottom>=0||s.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&s.top<=(window.innerHeight||document.documentElement.clientHeight)||s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)}loop(),$(".ms_carousel").on("init",function(e,s){$(".slick-current").prev().prev().prev().addClass("position2"),$(".slick-current").prev().prev().addClass("position3"),$(".slick-current").prev().addClass("position4"),$(".slick-current").next().addClass("position5"),$(".slick-current").next().next().addClass("position6"),$(".slick-current").next().next().next().addClass("position7")}),$(".ms_carousel").on("beforeChange",function(e,s,a,o){}),$(".ms_carousel").on("afterChange",function(e,s,a,o){$(".position2").removeClass("position2"),$(".position3").removeClass("position3"),$(".position4").removeClass("position4"),$(".position5").removeClass("position5"),$(".position6").removeClass("position6"),$(".position7").removeClass("position7"),$(".slick-current").prev().prev().prev().addClass("position2"),$(".slick-current").prev().prev().addClass("position3"),$(".slick-current").prev().addClass("position4"),$(".slick-current").next().addClass("position5"),$(".slick-current").next().next().addClass("position6"),$(".slick-current").next().next().next().addClass("position7")}),$(".mobile_bottom ul li.call_back a").click(function(){$(".mobile_callus").toggleClass("show")});