import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Navbar from "../Navbar/Navbar";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filteredSelection(status);
  }, [todos, status]);

  const addTodoHandler = (value) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: value,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteHandler = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id);
    setTodos(deleteTodo);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const todoIndex = { ...todos[index] };
    todoIndex.isComplete = !todoIndex.isComplete;
    const updateTodo = [...todos];
    updateTodo[index] = todoIndex;
    setTodos(updateTodo);
  };

  const updateTodoHandler = (id, newValue) => {
    const index = todos.findIndex((t) => t.id === id);
    const todoIndex = { ...todos[index] };
    todoIndex.text = newValue;
    const updateTodo = [...todos];
    updateTodo[index] = todoIndex;
    setTodos(updateTodo);
  };
  const filteredSelection = (status) => {
    switch (status) {
      case "Complete":
        setFilterStatus(todos.filter((t) => t.isComplete));
        break;
      case "UnComplete":
        setFilterStatus(todos.filter((t) => !t.isComplete));
        break;

      default:
        setFilterStatus(todos);
    }
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
    filteredSelection(e.target.value);
  };

  return (
    <div>
      <Navbar
        unComplete={todos.filter((t) => !t.isComplete).length}
        onSelect={selectHandler}
        status={status}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filterStatus}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        updateTodoHandler={updateTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
