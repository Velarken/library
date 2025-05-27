const myLibrary = [];

function Book(title,author,nativeLanguage,pageCount,bookID) {
    this.title = title;
    this.author = author;
    this.nativeLanguage = nativeLanguage;
    this.pageCount = pageCount;
    this.bookID = crypto.randomUUID()
}

function addBookToLibrary(title,author,nativeLanguage,pageCount) {
    const newBook = new Book(title,author,nativeLanguage,pageCount);
    myLibrary.push(newBook);
    // take parameters, create a book, then push to myLibrary array
}

const book1 = addBookToLibrary(
    "Thar She Blows, a Monicka Lewinsky Story",
    "Hillary Clinton",
    "English",
    271
)
console.table(myLibrary)

// loop through the myLibrary array, and display each book on the page
const bookCard = document.querySelector(".card");