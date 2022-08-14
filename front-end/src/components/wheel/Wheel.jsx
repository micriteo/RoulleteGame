import Number from "./Number";
import Line from "./Line";
import { animated, useSpring } from "react-spring";
import styles from "./Wheel.module.css";

const Wheel = ({ roll, done }) => {
  const numbers = getNumbers();

  const rollAnimation = useSpring({
    to: { marginLeft: "0px" },
    from: { marginLeft: "-3000px" },
    reset: true,
    immediate: roll,
    delay: 0,
    config: {
      mass: 1,
      tension: 100,
      friction: 200,
    },
    onRest: done,
  });

  return (
    <div className={styles.container}>
      <Line />

      <animated.div style={rollAnimation}>
        {numbers.map((item, index) => (
          <Number key={index} color={item.color} number={item.number} />
        ))}
      </animated.div>
    </div>
  );
};

const getNumbers = () => {
  var numbers = [];

  for (var x = 0; x < 5; x++) {
    for (var i = 0; i < 15; i++) {
      if (i === 0) {
        numbers.push({ color: "green", number: 0 }); //15 is the number of the 0
      } else {
        numbers.push({
          color: i % 2 === 0 ? "black" : "red", //if i is even, color is black, else color is red
          number: i % 2 === 0 ? 15 - i : i,
        });
      }
    }
  }

  return numbers;
};

export default Wheel;
