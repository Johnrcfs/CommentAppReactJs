import './App.css';

import { Comment } from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>My Comments App</h1>
      <Comment
        name='Jonathan Costa'
        email='johnrsfc.ti@gmail.com'
        date={new Date()}
        message='o John é superLindo'
      />
      <Comment
        name='Larissa Silva'
        email='laarirebeca3@gmail.com'
        date={new Date()}
        message='a Lary é SUPER LINDA'
      />
      
    </div>
  );
}

export default App;
