import styles from "./Number.module.css";

const Number = ({ number, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default Number;
