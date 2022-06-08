// require("./lib/pym");

// not using jquery
window.onload = function(){
  var story = document.getElementById('story-page-body');
  if(story){
    var paragraphs = document.getElementById('story-page-body').getElementsByTagName('p');
    for (var i=0; i<paragraphs.length; i++){
      var anchors = paragraphs[i].getElementsByTagName('a');
      for (var x=0; x<anchors.length; x++){
        anchors[x].setAttribute('target', '_blank');
      }
    }
  }
}

// animate on scroll
AOS.init({
  easing: 'ease-in',
  duration: 5000
});
