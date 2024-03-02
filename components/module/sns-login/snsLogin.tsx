import React from "react";
import Image from "next/image";
import styles from "./snsLogin.module.css";
import {
  apple_svg,
  google_png,
  kakao_svg,
  naver_png,
  facebook_svg,
} from "@/public/image/index";

const SnsLogin = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.google_container}>
        <Image src={google_png} alt="google_png" width={25} height={25} />
      </li>
      <li className={styles.kakao_container}>
        <Image src={kakao_svg} alt="kakao_svg" width={25} height={25} />
      </li>
      <li className={styles.naver_container}>
        <Image src={naver_png} alt="naver_png" width={40} height={40} />
      </li>
      <li className={styles.facebook_container}>
        <Image src={facebook_svg} alt="facebook_svg" width={25} height={25} />
      </li>
      <li className={styles.apple_container}>
        <Image src={apple_svg} alt="apple_svg" width={25} height={25} />
      </li>
    </ul>
  );
};

export default SnsLogin;

//구글 카카오 네이버 페이스북 애플
