import styles from "./BetTable.module.css";

const BetTable = ({ color }) => {
    return(
    // <div className={styles.container}>
      <div className={styles.container}>
          <div className={styles.title}>{color}</div>
          <hr/>
          <div className={styles.table}>
            {Bets.map((bet) => (
            <tr>
              <td><div className={styles.text}>{bet.name}</div></td>
              <td><div className={styles.text}>{bet.amount}$</div></td>
            </tr>
            ))}
        </div>
      </div>
  );
};

export default BetTable; // export default Bets;