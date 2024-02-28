import React from "react";
import { getCredits } from "@/components/api/getMovieData";
import Image from "next/image";
import styles from "@/styles/movieCredites.module.css";
interface IParams {
  params: { id: string };
}
const Credits = async ({ params: { id } }: IParams) => {
  const credits = await getCredits(id);
  const profilesWithPaths = credits.filter(
    (credit) => credit.profile_path !== null
  );
  return (
    <div className={styles.container}>
      {profilesWithPaths?.map((credit) => (
        <div key={credit.id} className={styles.creditsWrapper}>
          <Image
            src={credit.profile_path}
            alt="profile"
            width={180}
            height={250}
          />
          <div className={styles.textWrapper}>
            <h1>{credit.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Credits;
