import { useState } from "react";
import swal from "sweetalert";

type TodoFormProps = {
  addTodo: (title: string) => boolean;
};

function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(value.trim()){
      addTodo(value.trim())
      setValue("")
    }else{
      swal({
        title:"wrong value",
        icon:"error",
    })
      setValue("")
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
