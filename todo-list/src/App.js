import { useState } from 'react';
import './App.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    })

    setTodos(newTodos);
  }
  
  const completeTodo = (text) => {
    deleteTodo(text);
    setCompletedTasks(completedTasks + 1);
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      {completedTasks > 0 && (
        <div style={{flexDirection: 'row'}}>
          <p>{completedTasks} tasks completed</p>
        </div>
      )}
      <TodoList list={todos} remove={deleteTodo} complete={completeTodo} />
    </div>
  );
}

export default App;
