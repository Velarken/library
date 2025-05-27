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
const book2 = addBookToLibrary(
    "Thats a lot of nuts! How love was found with a language barrier",
    "That guy from Kung Pow",
    "English kind of?",
    69
) 
console.table(myLibrary)

// loop through the myLibrary array, and display each book on the page
const bookContainer = document.querySelector(".card-container");
/*const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookLanguage = document.querySelector(".nativeLanguage");
const bookPageCount = document.querySelector(".pageCount");
const bookID = document.querySelector(".uniqueID"); */





function generateLibrary (array) {
    array.forEach(function (item){

    const newCard = document.createElement("div");
    newCard.classList.add("card");
    bookContainer.append(newCard);
    const bookTitle = document.createElement("div");
    bookTitle.classList.add("title");
    newCard.appendChild(bookTitle);
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("author");
    newCard.appendChild(bookAuthor);
    const bookLanguage = document.createElement("div");
    bookLanguage.classList.add("language");
    newCard.appendChild(bookLanguage);
    const bookPageCount = document.createElement("div");
    bookPageCount.classList.add("pages");
    newCard.appendChild(bookPageCount);
    const uniqueID = document.createElement("div");
    uniqueID.classList.add("ID");
    newCard.appendChild(uniqueID);

        for (let book in array) {
            bookTitle.textContent = item.title;
            bookAuthor.textContent = item.author;
            bookLanguage.textContent = item.nativeLanguage;
            bookPageCount.textContent = item.pageCount;
            uniqueID.textContent = item.bookID
        }
    })
}

/*     for (let book in array) {
        console.log(book);
        for (let key in object) {
            bookTitle.textContent = object[key];
            bookAuthor.textContent = "hello";
            bookLanguage.textContent = "hello";
            bookPageCount.textContent = "hello";
            bookID.textContent = "hello";
        }
    }
 */


generateLibrary(myLibrary);
console.table(myLibrary)