console.log("inside index .js")

/constructor
function Book(name,author,genre){
this.name=name;
this.author=author;
this.genre=genre;

}

//output const

function display(){

}




//submit onclick listner
let libraryform =document.getElementById('libraryform');
libraryform.addEventListener('submit',libraryformsubmit);


function libraryformsubmit(e){
    e.preventDefault();
    console.log(' sumitbutton pressed');
}


