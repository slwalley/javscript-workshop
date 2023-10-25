const CompletionCounter = (completedTasks) => {
  return (
    <>
      {completedTasks > 0 && (
        <div>
          <p>{completedTasks} tasks completed</p>
          {/* <button className="clear-all-button" onClick={() => clearAll}>Clear All</button> */}
        </div>
      )}
    </>
  )
}

export default CompletionCounter;