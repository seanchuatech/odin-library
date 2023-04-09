let myLibrary = []


function Book(title, description, pages, read) {
    this.title = title
    this.description = description
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.getElementById("id-title").value
    let description = document.getElementById("id-description").value
    let pages = document.getElementById("id-pages").value
    let read = document.getElementById("id-read").checked
    let book = new Book(title, description, pages, read)
    myLibrary.push(book)
    listBooks()

}

function listBooks() {
    const container = document.getElementById("container")
    container.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i]
        const content = document.createElement("div")
        content.classList.add("content")
        content.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.description}</p>
            <p>${book.pages} pages </p>
            <p>${book.read ? "Read" : "Not read"}</p>
            <button onclick="editBook(${i})">Edit</button>
            <button onclick="deleteBook(${i})">Delete</button>
        `;
        container.appendChild(content);
    }
}

function editBook(index) {
    let book = myLibrary[index];
    let newTitle = prompt("Enter new title:", book.title)
    let newDescription = prompt("Enter new description:", book.description)
    let newPages = prompt("Enter new number of pages:", book.pages)
    let newRead = confirm("Has the book been read?")
    book.title = newTitle
    book.description = newDescription
    book.pages = newPages
    book.read = newRead
    listBooks()

}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    listBooks();
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
