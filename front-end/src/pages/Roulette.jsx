import { useState } from "react";

import Wheel from "../components/wheel/Wheel";
import Countdown from "../components/countdown/Countdown";
import Bets from "../components/bets/Bets";
import Input from "../components/input/Input";

import styles from "./Roulette.module.css";

const Roulette = () => {
  const [roll, setRoll] = useState(true);
  const [count, setCount] = useState(10);

  const countdownDone = () => {
    setRoll(false);
    setCount(true);
  };

  const rollDone = () => {
    setRoll(true);
    setCount(false);
  };

  const updateRoll = () => {
    setRoll(!roll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>ROULETTE</div>
      <Countdown count={count} done={countdownDone} />
      <Wheel roll={updateRoll} done={rollDone} />
      <Input />
      <Bets />
    </div>
  );
};

export default Roulette;
