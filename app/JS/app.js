var searchVisible = 0;
 var transparent = true;
 
 var transparentDemo = true;
 var fixedTop = false;
 
 var navbar_initialized = false;
 
 $(document).ready(function(){
     window_width = $(window).width();
 
     $('[data-toggle="tooltip"]').tooltip();
 
     if($('.switch').length != 0){
         $('.switch')['bootstrapSwitch']();
     }
     if($("[data-toggle='switch']").length != 0){
          $("[data-toggle='switch']").bootstrapSwitch();
     }
 
     if($(".tagsinput").length != 0){
         $(".tagsinput").tagsInput();
     }
     if (window_width >= 768) {
         big_image = $('.page-header[data-parallax="true"]');
 
         if(big_image.length != 0){
            $(window).on('scroll', pk.checkScrollForPresentationPage);
         }
     }
 
     if($("#datetimepicker").length != 0){
         $('#datetimepicker').datetimepicker({
             icons: {
                 time: "fa fa-clock-o",
                 date: "fa fa-calendar",
                 up: "fa fa-chevron-up",
                 down: "fa fa-chevron-down",
                 previous: 'fa fa-chevron-left',
                 next: 'fa fa-chevron-right',
                 today: 'fa fa-screenshot',
                 clear: 'fa fa-trash',
                 close: 'fa fa-remove'
             },
             debug: true
         });
     };
 
     if($('.navbar[color-on-scroll]').length != 0){
         $(window).on('scroll', pk.checkScrollForTransparentNavbar)
     }
 
 
     $('.btn-tooltip').tooltip();
     $('.label-tooltip').tooltip();
 
     $('.carousel').carousel({
       interval: 4000
     });
 
     $('.form-control').on("focus", function(){
         $(this).parent('.input-group').addClass("input-group-focus");
     }).on("blur", function(){
         $(this).parent(".input-group").removeClass("input-group-focus");
     });
 
     pk.initPopovers();
 
     pk.initCollapseArea();
 
     pk.initSliders();
 
 });
 
 
 $(document).on('click', '.navbar-toggler', function(){
     $toggle = $(this);
     if(pk.misc.navbar_menu_visible == 1) {
         $('html').removeClass('nav-open');
         pk.misc.navbar_menu_visible = 0;
         setTimeout(function(){
             $toggle.removeClass('toggled');
             $('#bodyClick').remove();
         }, 550);
     } else {
         setTimeout(function(){
             $toggle.addClass('toggled');
         }, 580);
 
         div = '<div id="bodyClick"></div>';
         $(div).appendTo("body").click(function() {
             $('html').removeClass('nav-open');
             pk.misc.navbar_menu_visible = 0;
             $('#bodyClick').remove();
             setTimeout(function(){
                 $toggle.removeClass('toggled');
             }, 550);
         });
 
         $('html').addClass('nav-open');
         pk.misc.navbar_menu_visible = 1;
     }
 });
 
 pk = {
     misc:{
         navbar_menu_visible: 0
     },
 
     checkScrollForPresentationPage: debounce(function(){
         oVal = ($(window).scrollTop() / 3);
         big_image.css({
             'transform':'translate3d(0,' + oVal +'px,0)',
             '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
             '-ms-transform':'translate3d(0,' + oVal +'px,0)',
             '-o-transform':'translate3d(0,' + oVal +'px,0)'
         });
     }, 4),
 
     checkScrollForTransparentNavbar: debounce(function() {
             if($(document).scrollTop() > $(".navbar").attr("color-on-scroll") ) {
                 if(transparent) {
                     transparent = false;
                     $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
                 }
             } else {
                 if( !transparent ) {
                     transparent = true;
                     $('.navbar[color-on-scroll]').addClass('navbar-transparent');
                 }
             }
     }, 17),
 
     initPopovers: function(){
         if($('[data-toggle="popover"]').length != 0){
             $('body').append('<div class="popover-filter"></div>');
 
            $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {
                 $('.popover-filter').click(function(){
                     $(this).removeClass('in');
                     $('[data-toggle="popover"]').popover('hide');
                 });
                 $('.popover-filter').addClass('in');
             }).on('hide.bs.popover', function(){
                 $('.popover-filter').removeClass('in');
             });
 
         }
     },
     initCollapseArea: function(){
         $('[data-toggle="pk-collapse"]').each(function () {
             var thisdiv = $(this).attr("data-target");
             $(thisdiv).addClass("pk-collapse");
         });
 
         $('[data-toggle="pk-collapse"]').hover(function(){
             var thisdiv = $(this).attr("data-target");
             if(!$(this).hasClass('state-open')){
                 $(this).addClass('state-hover');
                 $(thisdiv).css({
                     'height':'30px'
                 });
             }
 
         },
         function(){
             var thisdiv = $(this).attr("data-target");
             $(this).removeClass('state-hover');
 
             if(!$(this).hasClass('state-open')){
                 $(thisdiv).css({
                     'height':'0px'
                 });
             }
         }).click(function(event){
                 event.preventDefault();
 
                 var thisdiv = $(this).attr("data-target");
                 var height = $(thisdiv).children('.panel-body').height();
 
                 if($(this).hasClass('state-open')){
                     $(thisdiv).css({
                         'height':'0px',
                     });
                     $(this).removeClass('state-open');
                 } else {
                     $(thisdiv).css({
                         'height':height + 30,
                     });
                     $(this).addClass('state-open');
                 }
             });
     },
     initSliders: function(){
         // Sliders for demo purpose in refine cards section
         if($('#sliderRegular').length != 0 ){
             var rangeSlider = document.getElementById('sliderRegular');
             noUiSlider.create(rangeSlider, {
                 start: [ 5000 ],
                 range: {
                     'min': [  2000 ],
                     'max': [ 10000 ]
                 }
             });
         }
         if($('#sliderDouble').length != 0){
             var slider = document.getElementById('sliderDouble');
             noUiSlider.create(slider, {
                 start: [20, 80],
                 connect: true,
                 range: {
                     'min': 0,
                     'max': 100
                 }
             });
         }
 
     },
 
 
 }
 
 examples = {
     initContactUsMap: function(){
         var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
         var mapOptions = {
           zoom: 14,
           center: myLatlng,
           scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
         }
         var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);
 
         var marker = new google.maps.Marker({
             position: myLatlng,
             title:"Hello World!"
         });
 
         // To add the marker to the map, call setMap();
         marker.setMap(map);
         }
 }

 
 function debounce(func, wait, immediate) {
     var timeout;
     return function() {
         var context = this, args = arguments;
         clearTimeout(timeout);
         timeout = setTimeout(function() {
             timeout = null;
             if (!immediate) func.apply(context, args);
         }, wait);
         if (immediate && !timeout) func.apply(context, args);
     };
 };
 
 //cursor
 document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

document.getElementById('close-btn').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.style.display = 'none';
});

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );