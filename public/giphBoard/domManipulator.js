/**
//ACTION

// DOM events & updates
  // event handlers watching user interaction go here
  // DOM insertions go here, too.
  // Check the DOM for an element, for example, and then
  // populate that element with data.
**/

populate index with giphBoards
$(document).ready(function(){

  window.onload = function() {
    console.log("window load giphs");
    //find container on index
    var giphsContainer = document.getElementsByClassName('giphs-container')[0];
    //locate firebase array of giphs
    //TODO: add firebase gif array
    giphsContainer.innerHTML = '';

    for (var i = 0; i < 8; i++) { //TODO: for length of giphBoard array
        giphsContainer.innerHTML += giphBoardTemplate; //TODO: viewController(giphBoardArray[i]).render();
    }
}

//GET GiphBoard to FIREBASE STORE
// var $giphBoardFromStore = $('.giphs-container');
// var giphBoardFromStore = giphBoardStore.child('giphBoardFromStore');
// giphBoardFromStore.on('child_added', function (snapshot) {
//   var n = snapshot.name();
//   var v = snapshot.val();


//PUSH GiphBoard Slide to FIREBASE STORE
$("#submit-btn").bind("click", function() {
    var gifURL = $(".URL-container");
    var gifURLValue = $.trim(gifURL.val());

    giphBoardStore.push({gifURL: gifURLValue}, function(error) {
        if (error !== null) {
            alert('Unable to push slide to Firebase!');
        }
    });

    return false;
});


//onClick: expand giphBoard to show slides
// $(".front-giph").on( "click", function() {
//console.log("onClick");
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


// });
