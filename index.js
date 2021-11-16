console.log("inside index .js")

    / constructor
function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;

}

//output const

function Display() {

}

Display.prototype.add = function (book) {
    console.log("adding")
    tablebody = document.getElementById('tablebody');

    let uistring = ` 
    <tr>

    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
  </tr>`

    tablebody.innerHTML += uistring;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');

    libraryform.reset();

}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

}

Display.prototype.show = function (type) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Book added</strong> .
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

}

//submit onclick listner
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);


function libraryformsubmit(e) {
    e.preventDefault();
    console.log(' sumitbutton pressed');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Author').value;

    let fiction = document.getElementById('fiction');
    let education = document.getElementById('Education');

    let Poetry = document.getElementById('Poetry');
    let genre;

    if (fiction.checked) {
        genre = fiction.value;
    }
    else if (education.checked) {
        genre = education.value;
    }
    else if (Poetry.checked) {
        genre = Poetry.value;
    }


    var book = new Book(name, author, genre);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Succes')

    } else {
        //show error
        display.show('eoor');
    };





}


