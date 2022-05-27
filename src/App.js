import React from 'react';
import './App.css';
import {Comment} from './components/Comment';

class App extends React.Component {

  state = {
    comments: [
      {
        name: 'Jonathan',
        email: 'John@John.com',
        date: new Date(),
        message: 'John é lindo demais',
      },
      {
        name: 'larissa',
        email: 'lari@John.com',
        date: new Date(),
        message: 'John é lindo demais',
      },
    ],
    form: {
      name: '',
      email: '',
      message: '',
    }
  };

  addComment = (event) => {
    event.preventDefault();
    const newComment = {...this.state.form, date: new Date()};

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name: '',
        email: '',
        message: '',
      }
    });

  };

  //capturando todos o evento digitado pelo usuario.
  onFieldChanges = (event) => {
    const newCommentForm = this.state.form;
    newCommentForm[event.target.name] = event.target.value;

    this.setState({
      form: newCommentForm
    })
  };

  //Metodo criado para deletar comment
  onDeleteComment = (comment) => {
    const filterList = this.state.comments.filter((commentFilter) => {
      return comment !== commentFilter;
    });
      this.setState({
        comments: filterList
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>My Comments Apps</h1>

        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              name={comment.name}
              email={comment.email}
              date={comment.date}
              message={comment.message}
              onDeleteComment={() => {this.onDeleteComment(comment)}}
            />
          );
        })};
        <form onSubmit={this.addComment}>
          <h2>Add Comment</h2>

          <div>
            <input
              onChange={this.onFieldChanges}
              value={this.state.form.name}
              type='text'
              name='name'
              placeholder='Type here your Name'
              required='required'
            />
          </div>

          <div>
            <input
              onChange={this.onFieldChanges}
              value={this.state.form.email}
              type='email'
              name='email'
              placeholder='Type here your Email'
              required='required'
            />
          </div>

          <div>
            <textarea 
            onChange={this.onFieldChanges}
            value={this.state.form.message}
            name='message' 
            rows='4' 
            placeholder='Type your Message'
            required='required'
            />
          </div>

          <button type='submit'>Add a Comment</button>
        </form>
      </div>
    );
  };

};




export default App;
