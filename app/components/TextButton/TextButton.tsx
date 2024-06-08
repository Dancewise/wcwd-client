import { Button } from "@ariakit/react";
import React from "react";
import styles from "./TextButton.module.css";
import ArrowIcon from "../../icons/arrow-right-top.png";

type PropType = {
  children: React.ReactNode;
};

export default function TextButton({ children }: PropType) {
  return (
    <Button className={styles.button}>
      <div className="flex items-center gap-1">
        {children} <img src={ArrowIcon} className={styles.arrow} />
      </div>
    </Button>
  );
}
