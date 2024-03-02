"use client";
import { useRouter } from "next/navigation";
import styles from "./smallDown.module.css";

const SmallDown = ({onClick}) => {
  return (
    <ul className={styles.container}>
      <li>MyPage</li>
      <li className={styles.logout} onClick={onClick}>Logout</li>
    </ul>
  );
};

export default SmallDown;
