console.log("inside index .js")

/constructor
function Book(name,author,genre){
this.name=name;
this.author=author;
this.genre=genre;

}

//output const

function Display(){

}

Display.prototype.add=function(){
    console.log("adding")
}

Display.prototype.clear=function(){
    let libraryform =document.getElementById('libraryform');

    libraryform.reset();

}

//submit onclick listner
let libraryform =document.getElementById('libraryform');
libraryform.addEventListener('submit',libraryformsubmit);


function libraryformsubmit(e){
    e.preventDefault();
    console.log(' sumitbutton pressed');
    let name = document.getElementById('bookname').value;
    let author=document.getElementById('Author').value;

    let fiction=document.getElementById('fiction');
    let education=document.getElementById('Education');

    let Poetry=document.getElementById('Poetry');
let genre;

    if (fiction.checked){
        genre=fiction.value;
    }
    else if(education.checked){
        genre=education.value;
    }
    else if(Poetry,checked){
        genre=Poetry.value;
    }


    var book=new Book(name,author,genre);
    console.log(book);
   

    let display =new Display();
    display.add(book);
    display.clear();
   
  
}


