//state is not application state, only responsible for
export default function(state = null, action){

  //only handle responses that we should
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload
  }
  return state //return self otherwise

}
