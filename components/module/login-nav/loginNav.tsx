"use client";
import Link from "next/link";
import styles from "./loginNav.module.css";
import { useRouter } from "next/navigation";

const LoginNav = () => {
  const isUserLoggedIn = localStorage.getItem("id");
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("id");
    router.push("/login");
  };

  return (
    <div className={styles.secondNav}>
      {isUserLoggedIn ? (
        <Link href={"login"}>
          <p onClick={handleLogout}>Logout</p>
        </Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default LoginNav;

//로그아웃 하면 로컬스토리지 아이디를 지워주고 로그인 페이지로 이동
