import styles from "../styles/Home.module.css";

export const Filter = ({ filter, onFilter }) => {
  return (
    <div style={{ gap: "20px" }}>
      <button
        className={styles.buttonAll}
        onClick={() => onFilter(filter)}
        style={{
          padding: "10px 20px",
          borderRadius: "15px",
          border: "1px solid",
          cursor: "pointer",
          backgroundColor: onFilter === filter ? "#3c82f6" : "#fff",
          color: onFilter === filter ? "rgb (222,222,222," : "#333",
          boxShadow: "5px 5px 10px #blue",
        }}
      >
        {filter}
      </button>
    </div>
  );
};
