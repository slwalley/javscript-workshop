const TodoList = (params) => {
  return (
    <>
      {true ? (
        <div>
          <p>finish me!</p>
        </div>
      ) : (
        <div className='empty'>
          <p>No task found</p>
        </div>
      )}
    </>
  )
}

export default TodoList;