import { getMovie } from "../../components/api/getMovieData";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "HOME",
};

//HomePage컴포넌트가 async인 이유는 next.js가 await를 사용할 수 있게 하기 위해서이다.

export default async function HomePage() {
  const movies = await getMovie();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

//app폴더의 page파일은 next.js에서 자동으로 라우팅이 된다.
//루트페이지
//app 폴더 안에서 다른 이름의 폴더를 만들고 그 안에 파일을 만들면 그 파일은 라우팅이 된다.
//앱 라우트 방식에서는 index가 아니라 꼭 page로 만들어야한다.
//not-found폴더를 만들고 그 안에 404.tsx파일을 만들면 404페이지가 된다.

//라우트 그릅은 폴더 이름을 괄호로 묶어줘야함
//괄호 폴더는 url에 영향을 받지 않음

//useClient를 사용하면 metadata는 사용할 수 없다.

//server컴포넌트에서 fetch 하는건 useState, useEffect, loding를 사용하지 않아도 패치 가능
//불러올 데이터를 함수 밖에서 꺼내서 사용함

//next.js에서는 기본적으로 서버컴포넌트로 동작됨
// 리액트 훅이 필요한 클라이언트 컴포넌트로 사용하고 싶으면 useClient를 사용해야함

//api를 불러오는건 벡앤드에서 하기 때문에 콘솔을 사용해도 프론트에서  데이터가 안나옴

//loading파일을 만들면 로딩중이라고 뜸

//nav가 로딩중에도 보이는 이유는 레이아웃 컴포넌트에서 렌더링되고 json데이터가 있는 HomePage컴포넌트만 로딩중이라고 뜸
