/**

//DISPATCHER

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
  this.boardTitle = '';
  this.likes = 0;
}

GiphBoard.prototype.addSlide = function(slide){
  this.slides.push(slide);
}

GiphBoard.prototype.removeSlide = function(slideID){
  for (var i=0; i< this.slides.length; i++){
    if (slideID === this.slides[i].slideID){
      this.slides.splice(i,1);
      return {success: true, message: "Your slide was deleted."}
    }
  }
  return {success: false, message: "Your slide has not been deleted."}
}

GiphBoard.prototype.moveSlide = function(fromIndex,toIndex){
  var slideIndex = this.slides.splice(fromIndex,1);
  this.slides.splice(toIndex,0,slideIndex[0]);
}

GiphBoard.prototype.editTitle = function(title){
  this.boardTitle = title;
}

GiphBoard.prototype.addLike = function(){
  this.likes++;
}

function Slide(url, slideText){
  this.url = url;
  this.slideText = slideText;
  this.slideID = slideID++;
}


//Main///////////

// var firstGiph = new GiphBoard("ralph");
//
// console.log(firstGiph);
//
// firstGiph.addSlide(new Slide("url","#1"));
// firstGiph.addSlide(new Slide("url","#2"));
// firstGiph.addSlide(new Slide("url","#3"));
//
// console.log(firstGiph.slides);
//
// console.log(firstGiph.removeSlide(2));
//
// console.log(firstGiph.slides);
//
// firstGiph.moveSlide(1,0);
//
// console.log(firstGiph.slides);
//
// firstGiph.addSlide(new Slide("url","#3"));
// firstGiph.addSlide(new Slide("url","#4"));
//
// firstGiph.moveSlide(3,1);
//
// console.log(firstGiph.slides);
