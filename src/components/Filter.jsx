import styles from "../styles/Home.module.css";

export const Filter = ({ filter, onFilter, currentFilter }) => {

  const isActive= currentFilter===filter
  return (
    <div style={{ gap: "20px" }}>
      <button
        className={styles.buttonAll}
        onClick={() => onFilter(filter)}
        style={{
          padding: "10px 20px",
          borderRadius: "15px",
          border: "1px solid #3b82f6",
          cursor: "pointer",
          backgroundColor: onFilter === filter ? "#3c82f6" : "#fff",
          color: onFilter === filter ? "222,222,222," : "#333",
          boxShadow: filter
            ? "0 4px 10px rgba(59, 130, 246, 0.3)"
            : "0 2px 5px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {filter}
      </button>
    </div>
  );
};
