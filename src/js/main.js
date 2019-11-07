
// require("./lib/pym");

var fullpage = require('fullpage.js');

function fullpageInit(){
  // Initializing it
  var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'D8303C79-0BD64932-AEC886F3-4E1AAB2D',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    sectionsColor: ['#000000', '#ffffff', '#ffffff', '#fffff', '#fffff'],
    slidesNavigation:true,
    navigation: true,
    navigationPosition: 'right',
    autoScrolling: false,
    keyboardScrolling: true,
    loopHorizontal:false,
    afterResize: function(width, height){
      var fullpageContainer = this;
    }
  });
  
  //disabling scrolling down
  fullpage_api.setAllowScrolling(true, 'up, down');
  
  //disabling keyboard scrolling down and right
  fullpage_api.setKeyboardScrolling(true, 'up, down');
    
  //adding the movedown action to the button
  $(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
  });
}

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if(w > 500){
  fullpageInit();
}


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
