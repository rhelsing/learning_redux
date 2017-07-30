import React, {Component} from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {

  getBookDetail(){
    if(this.props.book){
      return (
        <div>
        <h1>{this.props.book.title}</h1>
        <p>{this.props.book.description}</p>
        </div>
        )
    }else{
      return "Nothing selected"
    }
  }

  render(){
    return (
      <div>
        {this.getBookDetail()}
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {book: state.activeBook }
}

//the glue.. state comes up from redux.. dispatch actions down
export default connect(mapStateToProps)(BookDetail)
