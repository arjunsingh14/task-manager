import './App.scss';
import Logobar from './components/Logobar';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);


  return (
    <div className="App">
      <Logobar/>
      <Form/>
    </div>
  );
}

export default App;
