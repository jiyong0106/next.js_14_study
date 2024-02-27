"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔴" : ""}
        </li>
        <li>
          <Link href="about-us">About</Link>
          {path === "/about-us" ? "🔴" : ""}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;

//usepathname을 사용하면 현재 경로를 알 수 있다.클라이언트 컴포넌트에서만 사용 가능
//"use client"를 상단에 적어주면 브라우저에서만 사용할 수 있다.
//{path === "/" ? "🔴" : ""} 현재 위치를 알 수 있음


