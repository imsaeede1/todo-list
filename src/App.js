import React from "react";
import styles from "./app.module.css";
import TodoApp from "./components/TodoApp/TodoApp";

const App = () => {
  return (
    <div className={styles.container}>
      <TodoApp />
    </div>
  );
};

export default App;
