import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Wysiwyg.css';

class Wysiwyg extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  handleComment = () => {
    
  }

  render() {
    return (
      <div className='wysiwyg'>
        <h5>Leave a comment!</h5>
        <ReactQuill value={this.state.text}
          onChange={this.handleChange} />
        <button 
          onClick={this.handleComment}
        > Add Comment </button>
      </div>
    );
  }
}

export default Wysiwyg;