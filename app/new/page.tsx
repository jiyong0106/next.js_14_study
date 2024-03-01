import { getMovie } from "../../components/api/getMovieData";
import Movie from "@/components/module/movie-main";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "NewMovie",
};

//HomePage컴포넌트가 async인 이유는 next.js가 await를 사용할 수 있게 하기 위해서이다.

export default async function NewPage() {
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
