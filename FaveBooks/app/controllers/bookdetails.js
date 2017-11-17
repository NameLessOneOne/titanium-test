// var args = arguments[0] || {};
var args = arguments[0] || [];

// alert(args);

// var items = [
//     {isbn: {text: '1'}},
//     {name: {text: 'Great Expectations'}},
//     {author: {text: 'Charles Dickens'}},
//     {pages: {text: '100'}},
//     {annotation: {text: 'very good book, 100% info'}}
// ];

$.booksPropertyList.sections[0].setItems(args);

// var data = _.map(items, function(element) {
//     return {
//         properties: {
//             isbn: element.isbn,
//             name: element.name,
//             author: element.author,
//             pages: element.pages,
//             annotaion: element.annotaion
//         }
//     };
// });

// alert(args);
// $.isbn.text = args.isbn || 'id';
// $.authorLabel.text = args.author || 'Default author';
// $.nameLabel.text = args.name || 'Default name';
// $.pagesLabel.text = args.pages || 'Default pages';
// $.annotationLabel.text = args.annotation || 'Default annotation';
