import MovieSimilar from "@/components/module/movie-similar";
import { IParams } from "@/types/type";

const Similar = ({ params: { id } }: IParams) => {
  return (
    <div>
      <MovieSimilar id={id} />
    </div>
  );
};

export default Similar;
