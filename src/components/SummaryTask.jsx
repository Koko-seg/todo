import { useState } from "react";
import styles from "../styles/Home.module.css";

export const SummaryTask = ({ allCount, taskCompleted, clearButton }) => {
  if (!allCount && !taskCompleted) {
    return <p>No tasks yet. Add one above!</p>;
  }
  return (
    <div className={styles.taskComplete}>
      <p>
        {taskCompleted} of {allCount} tasks completed{" "}
      </p>
      <button className={styles.clearButton} onClick={clearButton}>
        Clear Completed
      </button>
    </div>
  );
};
