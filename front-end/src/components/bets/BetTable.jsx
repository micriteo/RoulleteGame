import styles from "./BetTable.module.css";
import Roulette from "../../pages/Roulette";

const BetTable = ({ color }) => {
  const bets = getBets();
    return(
    // <div className={styles.container}>
      <div className={styles.container}>
          <div className={styles.title}>{color}</div>
          <hr/>
          <div className={styles.table}>
            {Bets.map((bets) => (
            <tr>
              <td><div className={styles.text}>{bets.name}</div></td>
              <td><div className={styles.text}>{bets.amount}$</div></td>
            </tr>
            ))}
        </div>
      </div>
  );
};

export default BetTable; // export default Bets;