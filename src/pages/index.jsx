import styles from "../styles/Home.module.css";

import { Container } from "../components/Container";
import { Task } from "../components/Task";
import { useState } from "react";
import { Filter } from "../components/Filter";
import { SummaryTask } from "@/components/SummaryTask";

const filters = ["all", "active", "completed"];

export default function Home() {
  const [taskList, setTasklist] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    const confirmDel = window.confirm(
      "Are you sure you want to delete this list?"
    );
    const todoDelete = taskList.filter((todo) => todo.id !== id);
    if (!confirmDel) {
      return;
    }
    setTasklist(todoDelete);
  };
  const clearComplete = () => {
    const clearB = taskList.filter((task) => task.isCompleted !== true);

    setTasklist(clearB);
  };
  const handleComplete = (id) => {
    const doComplete = taskList.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });

    setTasklist(doComplete);
  };

  const filterTaskList = taskList.filter((task) => {
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  });

  const onFilter = (filter) => {
    setFilter(filter);
  };

  const allCount = filterTaskList.length;

  const taskCompleted = filterTaskList.filter(
    (task) => task.isCompleted === true
  ).length;

  return (
    <div>
      <div className={styles.general}>
        <h1 className={styles.title}>ToDo List</h1>
        <Container setTasklist={setTasklist} taskList={taskList} />
        <div className={styles.threeButtons}>
          {filters.map((filter) => {
            return <Filter key={filter} onFilter={onFilter} filter={filter} />;
          })}
        </div>
        {filterTaskList.map((task, id) => (
          <Task
            key={id}
            task={task}
            removeTaskById={handleDelete}
            completedButton={handleComplete}
          />
        ))}

        <SummaryTask
          allCount={allCount}
          taskCompleted={taskCompleted}
          clearButton={clearComplete}
        />
      </div>
    </div>
  );
}
