/*
//STORE

//database CRUD operations

//FIREBASE
*/

   // FirebaseUI config.
   var uiConfig = {
     // Query parameter name for mode.
     'queryParameterForWidgetMode': 'mode',
     // Query parameter name for sign in success url.
     'queryParameterForSignInSuccessUrl': 'signInSuccessUrl',
     'signInSuccessUrl': 'index.html',
     'signInOptions': [
       // Leave the lines as is for the providers you want to offer your users.
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
       firebase.auth.EmailAuthProvider.PROVIDER_ID
     ],
     // Terms of service url.
     'tosUrl': '<your-tos-url>',
     'callbacks': {
       'signInSuccess': function(currentUser, credential, redirectUrl) {
         // Do something.
         // Return type determines whether we continue the redirect automatically
         // or whether we leave that to developer to handle.
         return true;
       }
     }
   };

   var ui = new firebaseui.auth.AuthUI(firebase.auth());
   // The start method will wait until the DOM is loaded.

   ui.start('#firebaseui-auth-container', uiConfig);

////Firebase CRUD/////////

var giphBoardStore = new Firebase('https://giphboard.firebaseio.com');

var giphBoardFromStore = giphBoardFromStore.child('giphBoardStore');


var pushGiphBoardToStore function(giphBoard){
giphBoardFromStore.push({
  author: giphBoard.author,
  slides: giphBoard.slides,
  boardTitle: giphBoard.boardTitle,
  likes: giphBoard.likes
})
};

var slide = analytics.child('giphBoardFromStore');

var pushSlideToGiphBoard function(slide){
pushSlideToGiphBoard.push({
  url: slide.url,
  slideText: slide.slideText,
  slideID: slide.slideID
})
};
