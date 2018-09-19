$(function () {
  'use strict' ;
var winh = $(window).height() , upperh = $('.upper-bar').innerHeight() , navh = $('.navbar').innerHeight();
$('.slid,.carousel-item').height(winh - (upperh+navh))  ;
})

// features

$('.feature ul li').on('click',function() {
  $(this).addClass('active').siblings().removeClass('active');
if ($(this).data('class') === 'all') {
  $('.islam .col-sm').css('opacity',1);
}
else {
  $('.islam .col-sm').css('opacity','.08');
  $($(this).data('class')).parent().css('opacity',1);
}

})
