import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({
  todos,
  deleteHandler,
  completeHandler,
  updateTodoHandler,
}) => {
  const [edit, setEdit] = useState({ id: null, text: "", isComplete: false });

  const editTodoHandler = (newValue) => {
    updateTodoHandler(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodo = () => {
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onDelete={() => deleteHandler(todo.id)}
          onComplete={() => completeHandler(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodoHandler} edit={edit} />
      ) : (
        renderTodo()
      )}
    </div>
  );
};

export default TodoList;
