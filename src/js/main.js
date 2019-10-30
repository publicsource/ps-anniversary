// require("./lib/pym");

////////// fullPage.js
// Optional. When using fullPage extensions
// require("./lib/fullpage.dragAndMove.min.js");
require("./lib/scrolloverflow.js");

// Optional. When using scrollOverflow:true
// require('fullpage.js/vendors/scrolloverflow');

//var fullpage = require('fullpage.js');

// When using fullPage extensions replace the previos require
// of fullpage.js for this file
var fullpage = require("./lib/fullpage.extensions.min");

// Initializing it
var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'D8303C79-0BD64932-AEC886F3-4E1AAB2D',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#000000', '#000000', '#000000'],
    slidesNavigation:true,
    navigation: true,
    navigationPosition: 'right',
    //verticalCentered: false,
    //navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    // responsiveWidth: 900,
    animateAnchor: false,
    autoScrolling: false,
    keyboardScrolling: true,
    scrollOverflow: true,
    scrollHorizontally: true,
    loopHorizontal:false,
    afterResize: function(width, height){
  		var fullpageContainer = this;
  	}
});

//disabling scrolling down
fullpage_api.setAllowScrolling(true, 'up, down');

//disabling keyboard scrolling down and right
fullpage_api.setKeyboardScrolling(true, 'up, down');

// fullpage_api.setScrollingSpeed(0);

//adding the movedown action to the button
$(document).on('click', '#moveDown', function(){
  fullpage_api.moveSectionDown();
});

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});
