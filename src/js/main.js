
// require("./lib/pym");

////////// fullPage.js
// Optional. When using fullPage extensions
// require("./lib/fullpage.dragAndMove.min.js");
// require("./lib/scrolloverflow.js");

// Optional. When using scrollOverflow:true
require('fullpage.js/vendors/scrolloverflow');

var fullpage = require('fullpage.js');

// When using fullPage extensions replace the previos require
// of fullpage.js for this file
// var fullpage = require("./lib/fullpage.extensions.min");

// Initializing it
var myFullpage = new fullpage('#fullpage', {
  licenseKey: 'D8303C79-0BD64932-AEC886F3-4E1AAB2D',
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#000000', '#ffffff', '#ffffff', '#fffff', '#fffff'],
  slidesNavigation:true,
  navigation: true,
  navigationPosition: 'right',
  //verticalCentered: false,
  //navigationTooltips: ['First page', 'Second page', 'Third and last page'],
  // responsiveWidth: 900,
  // animateAnchor: false,
  autoScrolling: false,
  keyboardScrolling: true,
  //scrollOverflow: true,
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
