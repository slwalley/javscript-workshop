const TodoInput = () => {
  return (
    <div className='input-wrapper'>
      <input 
        type='text' 
        name='todo' 
        value={null}
        placeholder='Create a new todo' 
        onChange={(e) => {}} 
      />
      <button className='add-button' onClick={() => {}}>Add</button>
    </div>
  )
}

export default TodoInput;