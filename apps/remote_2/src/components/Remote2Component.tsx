import { useState } from "react";
import { useCounterStore } from "shared-counter";
import { Button } from "ui";

import styles from "./Remote2Component.module.css";

const Remote2Component = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => ++prev);
  };

  const sharedCount = useCounterStore((s) => s.count);
  const handleSharedIncrement = useCounterStore((s) => s.increment);

  return (
    <div className={styles.wrapper}>
      <h2>Provider 2</h2>
      <h3>Provider 2 Local Counter</h3>
      <Button onClick={handleIncrement}>Count: {count}</Button>
      <h3>Shared Counter</h3>
      <Button onClick={handleSharedIncrement}>
        Shared count: {sharedCount}
      </Button>
      <a href={import.meta.env.ASSET_PREFIX} target="_blank">See this app standalone</a>
    </div>
  );
};

export default Remote2Component;
