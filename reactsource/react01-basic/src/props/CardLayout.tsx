import type { ReactNode } from "react";
import styles from "./Card.module.css";

type ChildCard = {
  title?: string;
  children: ReactNode;
};

const CardLayout = ({ title, children }: ChildCard) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h2>{children}</h2>
    </div>
  );
};

export default CardLayout;
