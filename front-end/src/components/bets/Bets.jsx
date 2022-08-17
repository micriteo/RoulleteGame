import BetTable from "./BetTable";
import styles from "./Bets.module.css"; // import styles from "./Bets.module.css";

const Bets = () => {
  return(
    // <table>
    //   <tbody>
    //     <tr>
          <div className={styles.table}>
            <div className={styles.tablerow}>
              <BetTable color='RED' bets={Bets.red}/>
              <BetTable color='GREEN' bets={Bets.green}/>
              <BetTable color='BLACK' bets={Bets.black}/>
          </div>
        </div>
  );
};

export default Bets;
