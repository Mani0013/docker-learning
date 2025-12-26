import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    await axios.post('/api/todos', { text });
    setText('');
    fetchTodos();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Docker Todo App</h1>
      
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text} - {todo.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '30px', fontSize: '12px', color: '#666' }}>
        <p>Running in Docker Compose with:</p>
        <ul>
          <li>Frontend: React on port 3000</li>
          <li>Backend: Node.js on port 5000</li>
          <li>Database: MongoDB on port 27017</li>
        </ul>
      </div>
    </div>
  );
}

export default App;