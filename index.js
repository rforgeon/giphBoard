/**
Giphbord allows you to create a story board of multiple giphs.

Information we want to store:
>Slide Object
  -giph embed url
  -text option
>GiphBoard Object
  -Author
  -Date/time created (auto generate)
  -Array of Slide Objects
*/

var slideID = 0;

//constructor function
function GiphBoard(author){
  this.author = author;
  this.slides = [];
}

GiphBoard.prototype.addSlide(slide){
  this.slides.push(slide);
}

GiphBoard.prototype.removeSlide(slideID){
  for (var i=0; i< this.slides.length; i++){
    if (slideID === this.slides[i][slideID]){
      this.slides.splice(i,1);
      return {success: true, message: "Your slide was deleted."}
    }
  }
  return {success: false, message: "Your slide has not been deleted."}
}

function Slide(url, slideText){
  this.url = url;
  this.slideText = slideText;
  this.slideID = slideID++;
}
