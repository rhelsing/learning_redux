import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList(){
    return this.props.books.map( book => {
      return (
        <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4" onclick={selectBook}>
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps (state) {
  //state comes from redux
  //whatever is resturned will show up as props
  return {books: state.books }
}

function mapDispatchToProps(dispatch) {
  //adds these functions/actions to props
  return bindActionCreators( {selectBook: selectBook}, dispatch )
}

//the glue.. state comes up from redux.. dispatch actions down
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
