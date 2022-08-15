import BetTable from "./BetTable";
import styles from "./BetTable.module.css";

const Bets = () => {
  return (
    // <table>
    //   <tbody>
    //     <tr>
          <div className={styles.table}>
          <div className={styles.tablerow}>

          <BetTable color="Red" />
          <BetTable color="Black" />
          <BetTable color="Green" />

          </div>
          </div>
   
  );
};

export default Bets;
