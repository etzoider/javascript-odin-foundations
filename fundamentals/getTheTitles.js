/// function getTheTitles(Object books) : return Array [bookTitle1, bookTitle2, bookTitle3...]



const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
        title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
      },
      {
        title: 'Book4',
        author: 'Name4'
      },
      {
        title: 'Book5',
        author: 'Name5'
      },
      {
        title: 'Book6',
        author: 'Name6'
      }
  ]




function getTheTitles(dict) {
    let arr = [];
    let title;
    dict.forEach(item => {
        title = item['title'];
        (title != undefined) ? arr.push(title) : null;
    })
    return arr;
}


console.log(getTheTitles(books));