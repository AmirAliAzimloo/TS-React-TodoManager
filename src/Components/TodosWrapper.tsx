import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.types";

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
    // Code ...
    return true
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
