import { Todo as TodoType } from "./Todos.types"

type TodoProps ={
  todo:TodoType
  deleteTodo:(id:string)=>boolean
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
    </div>
    </div>
  )
}

export default Todo
