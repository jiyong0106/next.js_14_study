"use client";
import styles from "./smallDown.module.css";
import { useRouter } from "next/navigation";

const SmallDown = ({ onClick }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/myPage");
  };
  return (
    <ul className={styles.container}>
      <li onClick={handleClick}>MyPage</li>
      <li className={styles.logout} onClick={onClick}>
        Logout
      </li>
    </ul>
  );
};

export default SmallDown;
