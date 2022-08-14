import { animated, useSpring } from "react-spring";
import styles from "./Countdown.module.css";

const Countdown = ({ count, done }) => {
  const countdown = useSpring({
    from: { number: 10 },
    to: { number: 0 },
    reset: true,
    immediate: count,
    config: {
      duration: 10000,
    },
    onRest: done,
  });

  return (
    <div className={styles.container}>
      Rolling in
      <animated.span>
        {countdown.number.interpolate((number) => number.toFixed(2))}
      </animated.span>
    </div>
  );
};

export default Countdown;
