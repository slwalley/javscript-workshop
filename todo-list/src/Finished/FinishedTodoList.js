const TodoList = (params) => {
  return (
    <>
      {params.list.length > 0 ? (
        <ul className='todo-list'>
          {params.list.map((todo, index) => (
            <div className='todo'>
              <li key={index}>{todo}</li>
              <button className='delete-button' onClick={() => params.remove(todo)}>Delete</button>
              <button className='complete-button' onClick={() => params.complete(todo)}>Complete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>No task found</p>
        </div>
      )}
    </>
  )
}

// export default TodoList;