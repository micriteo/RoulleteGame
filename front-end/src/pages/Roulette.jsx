import { useState } from "react";

import Wheel from "../components/wheel/Wheel";
import Countdown from "../components/countdown/Countdown";
import Bets from "../components/bets/Bets";
import Input from "../components/input/Input";

import styles from "./Roulette.module.css";

const Roulette = () => {
  const [roll, setRoll] = useState(true);
  const [count, setCount] = useState(10); 
  // const [bets, setBets] = useState({ red: [{name: 'test' , amount: '400$'}],   green: [],black: []});
  // state={
  //   red: [{name: 'test' , amount: '400$'}],
  //   green: [],
  //   black: []
  // }
  const [bets] = [
    {
      red: [{name: 'test' , amount: '400$'}],
      green: [],
      black: []
    }
  ]
  // const handleRoll = () => {
  //   setBets(true);
  // }

  function countdownDone() {
    setRoll(false);
    setCount(true);
  }

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
      <Input/>
      <Bets bets={bets}/>
    </div>
  );
};

export default Roulette;
