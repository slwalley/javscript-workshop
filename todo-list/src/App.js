import { useState } from 'react';
import './App.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
 
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput/> 
      {/* {completedTasks > 0 && (
        <div style={{flexDirection: 'row'}}>
          <p>{completedTasks} tasks completed</p>
        </div>
      )} */}
      <TodoList />
    </div>
  );
}

export default App;
