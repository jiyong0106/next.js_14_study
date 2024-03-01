import { getSimilar } from "../../api/getMovieData";
import Image from "next/image";
import styles from "./movieSimilar.module.css";

const MovieSimilar = async ({ id }: { id: string }) => {
  const similars = await getSimilar(id);

  return (
    <div className={styles.container}>
      {similars.map((similar) => (
        <div key={similar.id} className={styles.similarWrapper}>
          <Image
            src={similar.poster_path}
            alt={similar.title}
            width={400}
            height={500}
          />
          <ul>
            <li className={styles.title}>{similar.title}</li>
            <li>❤️ {similar.vote_average.toFixed(1)}</li>
            <li>{similar.overview}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieSimilar;
