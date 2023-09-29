import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.types";
import swal from "sweetalert";

function TodosWrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);

    return true;
  };

  const deleteTodo = (id: string) => {

    swal({
        title:"Are you sure ?",
        icon:"warning",
        buttons:["no","yes"]
    })
    .then((result)=>{
        if(result){
        setTodos(todos.filter(todo=>todo.id !== id))

        swal({
            title:"delete successfully",
            icon:"success",
        })
        }
    })
  };

  const toggleComplete = (id: string) => {
    // Code ...
    return true
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List 💚 </h1>
      {/* Add New Todo Form */}

      <TodoForm addTodo={addTodo} />

      {/* display todos */}

      {todos.map((todo) => (
        <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodosWrapper;
