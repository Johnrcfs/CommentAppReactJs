import './style.css';

export function CommentForm(props){
    const {onAddComment, onFieldChanged, form} = props;
    
    return (
            <form className='comment-form' onSubmit={onAddComment}>
          <h2>Add Comment</h2>

          <div>
            <input
              onChange={onFieldChanged}
              value={form.name}
              type='text'
              name='name'
              placeholder='Type here your Name'
              required='required'
            />
          </div>

          <div>
            <input
              onChange={onFieldChanged}
              value={form.email}
              type='email'
              name='email'
              placeholder='Type here your Email'
              required='required'
            />
          </div>

          <div>
            <textarea 
            onChange={onFieldChanged}
            value={form.message}
            name='message' 
            rows='4' 
            placeholder='Type your Message'
            required='required'
            />
          </div>

          <button type='submit'>Add a Comment</button>
        </form>
    );
}