import React from "react";
import { getMovieId } from "./api/getMovieData";
import styles from "../styles/movieInfo.module.css";

const MovieInfo = async ({ id }: { id: string }) => {
  const movieInfo = await getMovieId(id);
  return (
    <div className={styles.container}>
      <img
        src={movieInfo.poster_path}
        alt={movieInfo.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h3>❤️{movieInfo.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movieInfo.overview}</p>
        <a href={movieInfo.homepage} target="_blank">
          HomePage
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;

//map를 사용 안하는 이유는 json데이터가 객체이기  때문
//video, /movie는 배열이기 때문에 map을 사용해야함