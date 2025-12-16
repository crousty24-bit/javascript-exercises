const books = [
  {
    title: 'Crimes & Passions',
    author: 'Sarah Sour'
  },
  {
    title: 'The Haunted Door',
    author: 'Steve Boloni'
  }
]

const getTheTitles = (books) => books.map(book => book.title);

console.log(getTheTitles(books));

// add same func for author :
const getTheAuthors = (books) => books.map(writter => writter.author);

console.log(getTheAuthors(books));

// Do not edit below this line
module.exports = getTheTitles;
