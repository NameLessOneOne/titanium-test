var myBooks = Alloy.Collections.books;
var book = Alloy.createModel('books', {
    isbn: '1',
    name: 'Great Expectations',
    author: 'Charles Dickens',
    pages: '100',
    annotation: 'very good book, 100% info'
});

myBooks.add(book);
book.save();

function showBook(event) {
    var selectedBook = event.source;

    var args = [
        {isbn: {text: selectedBook.isbn}},
        {name: {text: selectedBook.title}},
        {author: {text: selectedBook.author}},
        {pages: {text: selectedBook.pages}},
        {annotation: {text: selectedBook.annotation}}
    ];

    // var args = {
    //     isbn: selectedBook.isbn,
    //     name: selectedBook.title,
    //     author: selectedBook.author,
    //     pages: selectedBook.pages,
    //     annotation: selectedBook.annotaion
    // };

    var bookview = Alloy.createController("bookdetails", args).getView();
    if (OS_IOS) {
        $.index.openWindow(bookview);
    }
    if (OS_ANDROID) {
        bookview.open();
    }
}

$.index.open();
