import React from "react";

import styles from "./Button.module.css";

type Props = React.ComponentProps<"button">;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button, Props as ButtonProps };
