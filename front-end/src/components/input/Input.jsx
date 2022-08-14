import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="0" className={styles.input} />
      <button className={styles.button}>Place</button>
    </div>
  );
};

export default Input;
