//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor

function UI() {}
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    // Insert columns

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class='delete'>X</a></td>
    `;
    list.appendChild(row);
}

// show alerts
UI.prototype.showAlert = function(message, className) {
    if (true) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);
        // Timeout
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);

    }

}

// delete books
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
    function(e) {
        // get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        // Instantiatinng book object
        const book = new Book(title, author, isbn);

        // Instantiate UI
        const ui = new UI();

        // Validate
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in all fields', 'error')
        } else {
            // Add book to list
            ui.addBookToList(book);

            // Clear Fileds
            ui.clearFields();

            ui.showAlert('Book Added', 'success');
        }



        e.preventDefault();
    })


// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed', 'success');
})