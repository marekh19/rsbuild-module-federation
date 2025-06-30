import cx from "clsx";
import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
  intent: "red" | "blue" | "yellow";
  label?: string;
  className?: string;
};

export const Container = ({ className, children, intent, label }: Props) => {
  return (
    <div className={cx(styles.container, styles[intent], className)}>
      {children}
      {label && <div className={cx(styles.label, styles[intent])}>{label}</div>}
    </div>
  );
};
