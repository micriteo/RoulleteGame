import styles from "./Input.module.css";

const Input = () => {
  return (
    <center>
      <div className={styles.container}>
        <input type="text" placeholder="0" className={styles.input} />
        <button className={styles.button}>Place</button>
      </div>
    </center>
  );
};

export default Input;
