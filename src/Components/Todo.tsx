import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Todo as TodoType } from "./Todos.types"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

type TodoProps ={
  todo:TodoType
  deleteTodo:(id:string)=>void
  toggleComplete:(id:string)=>boolean
}

function Todo({todo,deleteTodo,toggleComplete}:TodoProps) {
  return (
    <div className="Todo">
    <p
      className={ `${todo.completed ? "completed" : ""}` } // or completed className
    >
      {todo.title}
    </p>
    <div>
    <FontAwesomeIcon onClick={()=>deleteTodo(todo.id)} icon={faTrash} />
    </div>
    </div>
  )
}

export default Todo
