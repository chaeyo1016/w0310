

const TodoApp = ({tasks}) => {
    const handleDelete = (index) =>
        setTasks(tasks.filter((_,i)=> i !== index));
  return (
    <ul className="p-0">
        {tasks.map((task, index) => {

            <li 
            key={index}
            className="d-flex justify-content-between align-items-center border p-2 rounded mb-1">
            <span>{tasks}</span>
            <button className="btn btn-danger btn-sme equal-width" onClick={()=> onDelete(index)}>삭제</button>
           
        </li>
        })}
    </ul>
  )
}

export default TodoApp

