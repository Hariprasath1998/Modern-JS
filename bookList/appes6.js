class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book) {
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




    showAlert(message, className) {
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

    };

    deleteBook(target) {
        target.parentElement.parentElement.remove();

    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            ui.addBookToList(book);

        })
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));


    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);



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

            // Local Storage
            Store.addBook(book);

            // Clear Fileds
            ui.clearFields();

            ui.showAlert('Book Added', 'success');
        }



        e.preventDefault();
    })


// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        const ui = new UI();
        ui.deleteBook(e.target);
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert('Book removed', 'success');
    }
})