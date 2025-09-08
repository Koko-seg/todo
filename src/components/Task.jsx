import styles from "../styles/Home.module.css";
export const Task = ({ task, removeTaskById, completedButton }) => {
  return (
    <div>
      <div className={styles.task}>
        <div className={styles.checkInput}>
          <input
            checked={task.isCompleted}
            onChange={() => completedButton(task.id)}
            type="checkbox"
            className={styles.threeButtons}
          />

          <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
            {task.taskName}
          </p>
        </div>

        <button
          className={styles.deleteButton}
          onClick={() => removeTaskById(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
