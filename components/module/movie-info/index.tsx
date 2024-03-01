import { getMovieId } from "../../api/getMovieData";
import styles from "./movieInfo.module.css";
import Link from "next/link";

const MovieInfo = async ({ id }: { id: string }) => {
  const movieInfo = await getMovieId(id);
  return (
    <div className={styles.container}>
      <img
        src={movieInfo.poster_path}
        alt={movieInfo.title}
        className={styles.poster}
      />
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h3>❤️ {movieInfo.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movieInfo.overview}</p>
        <div className={styles.infoLink}>
          <a href={movieInfo.homepage} target="_blank">
            👉 HomePage
          </a>
          <Link href={`/movies/${id}/credits`}>👉 ActorProfile</Link>
          <Link href={`/movies/${id}/similar`}>👉 similarMovie</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
