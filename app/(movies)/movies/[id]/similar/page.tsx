import MovieSimilar from "@/components/module/movie-similar";
import { IParams } from "@/types/type";
import Navigation from "@/components/module/navigation/index";

const Similar = ({ params: { id } }: IParams) => {
  return (
    <div>
      <Navigation />
      <MovieSimilar id={id} />
    </div>
  );
};

export default Similar;
