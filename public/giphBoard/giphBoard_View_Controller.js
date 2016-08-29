$(document).ready(function(){

  window.onload = function() {
    console.log("window load giphs");
    var giphsContainer = document.getElementsByClassName('giphs-container')[0];

    giphsContainer.innerHTML = '';

    for (var i = 0; i < 8; i++) {
        giphsContainer.innerHTML += giphBoardTemplate;
    }
}

  $(".front-giph").on( "click", function() {
  console.log("onClick");
    // var expandGiphBoard = function() {
    //
    //                  var secondGiph = document.getElementsByClassName('second-giph');
    //
    //                  var moveSecondGiph = function() {
    //                      secondGiph[0].style.opacity = 1;
    //                      secondGiph[0].style.transform = "scaleX(1) translateY(1)";
    //                      secondGiph[0].style.msTransform = "scaleX(1) translateY(3)";
    //                      secondGiph[0].style.WebkitTransform = "scaleX(1) translateY(0)";
    //                  };
    //
    //
    //                  moveSecondGiph();
    //
    //              };

    // giphsContainer[1][1].innerHTML = giphBoardExpandTemplate;

  });

  var giphBoardExpandTemplate =

  '<div class="giphBoardContainer">'
  +    '<img class="giph-profile-picture large" src="assets/user.png">'
  +      '<div class="container column fourth">'
  +        '<img class="front-giph large" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
  +        '<img class="second-giph large" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
  +        '<img class="third-giph large" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
  +      '</div>'
  +      '<div class="giph-title column half">'
  +        '<p>Koala Lunch</p>'
  +      '</div>'
  +      '<div>'
  +      '<img class="giphBoard-heart large" src="assets/heart_white_large.png">'
  +        '<div class="giphBoard-heart-value large">'
  +          '<p>52</p>'
  +        '</div>'
  +      '</div>'
  +'</div>'
  ;


  var giphBoardTemplate =

  '<div class="giphBoardContainer column third">'
  +  '<img class="giph-profile-picture" src="assets/user.png">'
  +  '<img class="giphBoard-heart" src="assets/heart_color.png">'
  +    '<div class="giphBoard-heart-value">'
  +      '<p>1k</p>'
  +    '</div>'
  +  '<div>'
  +    '<img class="front-giph" src="https://media1.giphy.com/media/OuB1A07FsPqV2/200w.gif">'
  +    '<div>'
  +      '<img class="second-giph" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
  +      '<div>'
  +        '<img class="third-giph" src="http://i.giphy.com/Hrr0GblXsiE7u.gif">'
  +      '</div>'
  +    '</div>'
  +  '</div>'
  +'</div>'
  ;

});
