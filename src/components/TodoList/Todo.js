import styles from "./todoList.module.css";
const Todo = ({ todo, onDelete, onComplete, onEdit }) => {
  return (
    <div>
      <p
        onClick={onComplete}
        className={`${todo.isComplete ? styles.complete : styles.red}`}
      >
        {todo.text}
      </p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
