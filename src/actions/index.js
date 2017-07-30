export function selectBook(book) {
  console.log(`clicked ${book.title}`)

  //action creator, object w/ a type property and a payload
  //message sending and processing
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
