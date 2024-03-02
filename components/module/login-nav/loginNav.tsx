"use client";
import Link from "next/link";
import styles from "./loginNav.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";
import { smallDown_svg } from "@/public/image/index";
import Image from "next/image";
import SmallDown from "@/components/atomic/smallDown";

const LoginNav = () => {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    router.push("/signin");
  };

  useEffect(() => {
    const useId = localStorage.getItem("id");
    setIsUserLoggedIn(useId);
  });

  return (
    <div className={styles.secondNav}>
      {isUserLoggedIn ? (
        <div className={styles.profile}>
          <span>{isUserLoggedIn}</span>
          <Image
            src={smallDown_svg}
            alt="smallDown_svg"
            width={30}
            height={30}
            className={styles.smallDown_svg}
            onClick={handleClick}
          />
          {isClick && <SmallDown onClick={handleLogout} />}
        </div>
      ) : (
        <Link href="/signin">Login</Link>
      )}
    </div>
  );
};

export default LoginNav;

//로그아웃 하면 로컬스토리지 아이디를 지워주고 로그인 페이지로 이동
//케밥버튼으로 로그아웃 만들기
//<p onClick={handleLogout}>Logout</p>
