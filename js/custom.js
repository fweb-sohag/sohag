$(function(){
  'use strict';
  var backToTop = $('.backToTop');
  var html_body = $('html,body');
  

    
  
      $(window).scroll(function () { 
          var scrolling = $(this).scrollTop();
          if(scrolling > 200){
              backToTop.fadeIn();
          }else{
              backToTop.fadeOut();
          }
          if(scrolling >200){
               $('.navbar').addClass('fixd-nav');
           }else{
               $('.navbar').removeClass('fixd-nav');
           }
      });
  
  
      backToTop.on('click',function(){
          html_body.animate({
              scrollTop:0,
          },1500);
      });
  
      $('.navbar .navbar-nav .nav-item a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500,);
                  return false;
              }
          }
      });  
  });


  $('.navbar .navbar-nav .nav-link').click(function () {
    // $('.navbar a').removeClass('active');
    // $(this).addClass('active');//
    $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
  });

     //    menu icon toggler

     $(".navbar .navbar-toggler").on("click", function () {
      $(".navbar .navbar-toggler span").toggleClass("fa fa-times");
  });

  (function($) {
    
    $('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#DD4B25',
        
    });
    $('.css').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#254BDD'
    });
    $('.bootstrap').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#8912FC'
    });

    $('.jquery').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#045EA4',
       
    });
  })(jQuery);

$('#banner').ripples({
  resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
})
var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}
function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}
singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
   $words.each(function(){
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
         letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
   });
}


// hover effect 
$(function() {
   $(".banner-btn > a").on('mouseenter', function(e) {
     x = e.pageX - $(this).offset().left;
     y = e.pageY - $(this).offset().top;
     $(this).find("span").css({
       top: y,
       left: x
     });
   });
   $(".banner-btn > a").on('mouseout', function(e) {
     x = e.pageX - $(this).offset().left;
     y = e.pageY - $(this).offset().top;
     $(this).find("span").css({
       top: y,
       left: x
     });
   });
 });

//  banner top
 $(".mouse-wrap .mouse p").on("click",function(e){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-0},1500),e.preventDefault()});



// counter 
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// wow js 
new WOW().init();

// banner parallax 
$('#banner').parallax({imageSrc:'imges/banner-01.jpg'});

// filter 
$('.work-header ul li ').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

$( window ).on( 'load', function(){
  $( '.screen' ).scrollImage();
});


var mixer = mixitup('.work-filter');


$(function() {
  $('.line').animatedHeadline({
      animationType: 'scale'
  });
})




