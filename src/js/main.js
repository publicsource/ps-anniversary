// require("./lib/pym");

require("./scrollama");

// not using jquery
window.onload = function(){
  var paragraphs = document.getElementById('story-page-body').getElementsByTagName('p');
  for (var i=0; i<paragraphs.length; i++){
    var anchors = paragraphs[i].getElementsByTagName('a');
    for (var x=0; x<anchors.length; x++){
      anchors[x].setAttribute('target', '_blank');
    }
  }
}

