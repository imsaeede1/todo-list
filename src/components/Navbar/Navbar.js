import styles from "./navbar.module.css";

const Navbar = ({ unComplete, onSelect, status }) => {
  if (!unComplete) return <h2>Set Todos By Saeede</h2>;

  return (
    <div className={styles.container}>
      <span>{unComplete}</span>
      <h2>todos not completed</h2>

      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="UnComplete">UnComplete</option>
      </select>
    </div>
  );
};

export default Navbar;
