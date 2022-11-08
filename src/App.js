import React, { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      todo:todo
    }
    setList([...list, newTodo]);

      setInput('');
  };
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !==id);

    setList(newList);
  };
  return (
    <div>
      <h1>To-do list</h1>
      <input type="text" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick = {() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
