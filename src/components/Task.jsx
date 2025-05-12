import styles from "../styles/Home.module.css";
export const Task = ({ task, removeTaskById, completedButton }) => {
  return (
    <div>
      <div className={styles.task}>
        <input
          checked={task.isCompleted}
          onChange={() => completedButton(task.id)}
          type="checkbox"
          className={styles.threeButtons}
        />

        <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
          {task.taskName}
        </p>

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

const addFood = () => {
  foods.push("🍕");
};

const filterFood = "🍕";

const foods = ["🍕", "🍔"];

const renderFoods = foods.filter((food) => {
  if (filterFood == null) {
    return true;
  } else {
    return food === filterFood;
  }
});

const onSelectFilterFood = () => {
  filterFood = "🍕";
};

<button onClick={onSelectFilterFood}></button>;
