import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { getMovieId } from "../../../../components/api/getMovieData";
import MovieCredits from "../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovieId(id);
  return {
    title: movie.title,
  };
};

const MovieDetail = async ({ params: { id } }: IParams) => {
  return (
    <>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
};

export default MovieDetail;

//폴더에 [id] 폴더가 있으면 동적 라우팅이 가능하다.
//url 뒤에 아무 문자나 넣어도 페이지가 렌더링된다.
//이 페이지는 백엔드에서 실행 -> 서버사이드 렌더링이 가능하다. -> 서버컴포넌트

//promise.all을 사용하면 두개의 프로미스를 동시에 실행할 수 있다.

{
  /* <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense> */
}

//이렇게 하면 두개의 컴포넌트를 병렬로 렌더링할 수 있다.

//fetch해야하는 컴포넌트만 렌더링
//데이터가 어디서 로딩될 지 선택할 수 있음
//데이터를 로딩하는 중에 아무것도 표시하지 않거나 로딩 화면만 표시하는 대신
//페이지에 많은 정보를 표시한 뒤에 로딩 상태를 분리할 수 있다.
//전체페이지가 로딩 될 필요가 없고 필요한 부분만 로딩할 수 있다.
//그러기 위해서는 일단 컴포넌트가 async여야함
//그리고 Suspense를 사용해야함 , awiat을 사용하지 않아도 됨 -> Suspense가 대신해줌
//Suspense는 fallback을 사용해야함, fallback은 로딩중에 보여줄 컴포넌트를 말함
//suspend는 로딩중에 보여줄 컴포넌트를 말함
