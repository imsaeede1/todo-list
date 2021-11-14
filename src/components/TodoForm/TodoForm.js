import { useState } from "react";
import styles from "./todoForm.module.css";

const TodoForm = (props) => {
  const [value, setValue] = useState(props.edit ? props.edit.text : "");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) {
      alert("fill the todo");
      return;
    }
    props.addTodoHandler(value);
    setValue("");
  };

  return (
    <div className={styles.containerMain}>
      <form onSubmit={submitHandler} className={styles.containerForm}>
        <input
          onChange={changeHandler}
          type="text"
          value={value}
          className={styles.containerInput}
        />
        <button type="submit" className={styles.containerBtn}>
          {props.edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
