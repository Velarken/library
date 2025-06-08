// Select elements from DOM
let addBookButton = document.getElementById('addBookButton');
let clearBookButton = document.getElementById('clearBookButton');
const form = document.querySelector('#form');
const closeFormButton = document.querySelector('#closeButton');
const bookNameInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const languageInput = document.getElementById('language')
let currentBox = document.querySelector('#innerBox');
let mainBox = document.querySelector('.page')

// Empty Array  - Hold User Added Books
let library = [];
const storageKey = "BOOKS"

// Add a New Book to Library
const addNewBook = () => {
    const bookName = bookNameInput.value;
    const authorName = authorInput.value;
    const bookLanguage = languageInput.value;
    const pageCount = pagesInput.value;
    let bookID = crypto.randomUUID();

    library.push([bookName, authorName, bookLanguage, pageCount, bookID]);
    renderBooks();
    // Save to local stoarge
    saveBookData();

    // Reset form fields, close form
    form.classList.remove('active');
    bookNameInput.value = "";
    authorInput.value = "";
    bookLanguage.value = "";
    pagesInput.value = "";
    bookID = "";
};

// Show form when button is clicked
addBookButton.addEventListener('click', () => {
    form.classList.add('active');
});

// Clear all user input books
function clearBook() {
    books = [];
    localStorage.removeItem(storageKey);
    renderItems();
}

// Clear all books and reset localStorage
clearBookButton.addEventListener('click', clearBook);

// Hide the form when the close button is clicked
closeButton.addEventListener('click', () => {
    form.classList.remove('active');
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    addNewBook();
});

// Save data to local storage
function saveBookData() {
    localStorage.setItem(storageKey, JSON.stringify(library));
}

// Load Items from Local Storage
function loadItems() {
    const storedBooks = localStorage.getItem(storageKey);
    if (storedBooks) {
        books = JSON.parse(storedBooks);
        renderBooks();
    }
}

// Render Items in Library Array
function renderBooks() {
    currentBox.innerHTML = ''; // Clears current content before render
    library.forEach(([bookName,authorName,bookLanguage,pageCount,bookID]) => {
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML = `
            <h5 class="title">Book Title</h5>
            <div class="name">${bookName}</div>
            <h5 class="title">Author</h5>
            <div class="name">${authorName}</div>
            <h5 class="title">Page Count</h5>
            <div class="name">${pageCount}</div>
            <h5 class="title">Original Language</h5>
            <div class="name">${bookLanguage}</div>
            <h5 class="title">Unique ID</h5>
            <div class="name">${bookID}</div>
        `;
        currentBox.appendChild(newBook);
        mainBox.appendChild(currentBox)
    })

    const addBookDiv = document.createElement('div');
    addBookDiv.classList.add('book');
    addBookDiv.id = 'addBook';
    const addBookBtn = document.createElement('button');
    const clearBookBtn = document.createElement('button');
    addBookBtn.id = 'addBookBtn';
    clearBookBtn.id = 'clearBookBtn';
    clearBookBtn.innerHTML = 'Clear All Books';
    addBookBtn.innerHTML = 'Add Book';
    clearBookBtn.addEventListener('click', clearBook); // Fix here
    addBookBtn.addEventListener('click', () => { form.classList.add('active'); });
    addBookDiv.appendChild(addBookBtn);
    addBookDiv.appendChild(clearBookBtn);
    currentBox.appendChild(addBookDiv);
}

// Load items from local storage when DOM content is loaded
document.addEventListener('DOMContentLoaded', loadItems)