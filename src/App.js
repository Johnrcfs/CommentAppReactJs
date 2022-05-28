import React from 'react';
import './App.css';
import {Comment} from './components/Comment/index';

import {CommentForm} from './components/CommentForm/index';

import Swal from 'sweetalert2';

class App extends React.Component {

  state = {
    comments: [
      {
        name: 'John Fernandes',
        email: 'johnrsfc.ti@gmail.com',
        date: new Date(),
        message: 'John é lindo demais!',
      },
      {
        name: 'Thanos And Black',
        email: 'thanosandblack@gmail.com',
        date: new Date(),
        message: 'Meus Dois Dogs São os Mias Lindos!',
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

    Swal.fire('o Comentario foi adcionado com sucesso','', 'success');

  };

  deleteCommentAlert = (comment) => {

    Swal.fire({
      title: 'Realmente deseja Excluir esse Comentario?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sim',
      denyButtonText: `Não eu mudei de ideia.`,
      icon: 'question',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.onDeleteComment(comment);
        Swal.fire('o comentário foi excluido com sucesso!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Fique tranquilo nada foi excluido', '', 'info')
      }
    })

  }

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
              onDeleteComment={() => {this.deleteCommentAlert(comment)}}
            />
          );
        })}
        <CommentForm 
          onAddComment={this.addComment}
          onFieldChanged={this.onFieldChanges}
          form={this.state.form}
        />
      </div>
    );
  };

};




export default App;
