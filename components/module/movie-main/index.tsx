"use client";
import styles from "./movie.module.css";
import { useRouter } from "next/navigation";
import { MovieProps } from "@/types/type";

export default function Movie({ poster_path, title, id }: MovieProps) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
    </div>
  );
}


//서버컴포넌트에서는 next/router를 사용할 수 없다.
//next/router는 클라이언트 컴포넌트에서만 사용 가능하다.
//-> 서버컴포넌트에서는 next/navigation 사용
//onclick도 이벤트 리스너라 클라이언트 컴포넌트에서만 사용 가능하다.

// 서버 컴포넌트는 서버에서 실행되는 컴포넌트로,
//클라이언트에서 실행되는 브라우저 API인 next/router를 사용할 수 없다
//대신 next/navigation을 사용하여 서버 컴포넌트에서 라우터와 관련된 작업을 수행해야 한다.

//useclient는 클라이언트 사이드에서 실행되어야하는 코드가 있을 경우에 사용 
//