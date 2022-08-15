import styles from "./BetTable.module.css";

const BetTable = ({ color }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{color}</div>
       <div className={styles.table}>
         <tr>
           <div className={styles.text}>Test</div>
           <div className={styles.text}>400$</div>
         </tr>
     </div>
     </div>
  // <div className={styles.container}>
  //   <tr>
  //       <td>Test</td>
  //       <td>400$</td>
  //   </tr>
  //   </div>
  );
};

export default BetTable;