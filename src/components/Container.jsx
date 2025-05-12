import { useState } from "react";
import styles from "../styles/Home.module.css";

export const Container = ({ setTasklist, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    return setInputValue(event.target.value);
  };
  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };

    if (newTask.taskName === "") {
      return window.alert("Please write a text");
    }
    setTasklist([...taskList, newTask]);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <div className={styles.forms}>
          <input
            className={styles.taskText}
            value={inputValue}
            onChange={handleChange}
            placeholder="Add a new task..."
          />
          <button className={styles.taskAddButton} onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* <div className={styles.footer}>
          <span>Powered by</span>
          <span className={styles.pinecone}>Pinecone academy</span>
        </div> */}
      </div>
    </div>
  );
};
