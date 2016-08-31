/*
VIEW Controller

render giphBoard objects and structure them with HTML
*/


  //generate an HTML giphBoard
  var giphBoardViewController = {
  render: function(giphboard) {
    //check which heart color to use
    var heartColor = "";
    if (giphboard.likes === 0){
      heartColor = "assets/heart_white.png";
    }
    else{
      heartColor = "assets/heart_color.png";
    }

    //set HTML
    var html =

  '<div class="giphBoardContainer column third">'
  +  '<img class="giph-profile-picture" src="assets/user.png">'
  +  '<img class="giphBoard-heart" src="'+heartColor+'">'
  +    '<div class="giphBoard-heart-value">'
  +      '<p>'+giphboard.likes+'</p>'
  +    '</div>'
  +  '<div>'
  +    '<img class="front-giph" src="'+giphboard.slides[0]+'">'
  +    '<div>'
  +      '<img class="second-giph" src="'+giphboard.slides[1]+'">'
  +      '<div>'
  +        '<img class="third-giph" src="'+giphboard.slides[2]+'">'
  +      '</div>'
  +    '</div>'
  +  '</div>'
  +'</div>'
  ;


  return html;
  }
  };


  //generate an HTML giphBoard that is expanded to show each slide
  var giphBoardViewController_expanded = {
  render: function(giphboard) {
    //check which heart color to use
    var heartColor = "";
    if (giphboard.likes === 0){
      heartColor = "assets/heart_white_large.png";
    }
    else{
      heartColor = "assets/heart_color.png";
    }

    var expandGiphArray = function(){
      var imgHTML = "";
      for (var i = 0; i<giphboard.slides.length; i++){
        imgHTML += '<img class="front-giph large" src="'+giphboard.slides[i].url+'">';
      }
      return imgHTML;
    }

    //set HTML
    var html =

  '<div class="giphBoardContainer">'
  +    '<img class="giph-profile-picture large" src="assets/user.png">'
  +      '<div class="container column fourth">'
  +      expandGiphArray();
  +      '</div>'
  +      '<div class="giph-title column half">'
  +        '<p>'+giphboard.boardTitle+'</p>'
  +      '</div>'
  +      '<div>'
  +      '<img class="giphBoard-heart large" src="'+heartColor+'">'
  +        '<div class="giphBoard-heart-value large">'
  +          '<p>'+giphboard.likes+'</p>'
  +        '</div>'
  +      '</div>'
  +'</div>'
  ;

  return html;
  }
};



///////
var bigGiphHTML =

'<div class="giphBoardContainer">'
+    '<img class="giph-profile-picture large" src="assets/user.png">'
+      '<div class="container column fourth">'
+         '<img class="front-giph large" src="">'
+        '<img class="front-giph large" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
+        '<img class="front-giph large" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
+      '</div>'
+      '<div class="giph-title column half">'
+        '<p>Koala Lunch</p>'
+      '</div>'
+      '<div>'
+      '<img class="giphBoard-heart large" src="assets/heart_color.png">'
+        '<div class="giphBoard-heart-value large">'
+          '<p>1k</p>'
+        '</div>'
+      '</div>'
+'</div>'
;

//populate index with giphBoards
$(document).ready(function(){

  window.onload = function() {
    console.log("window load giphs");
    var giphsContainer = document.getElementsByClassName('giphs-container')[0];

    giphsContainer.innerHTML = '';

    for (var i = 0; i < 8; i++) { //TODO: for length of giphBoard array
        giphsContainer.innerHTML += bigGiphHTML; //TODO: viewController(giphBoardArray[i]).render();
    }
}
});
