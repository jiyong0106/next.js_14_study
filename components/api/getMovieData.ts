const BASEURL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const getMovie = async () => {
  return await fetch(BASEURL).then((res) => res.json());
};

export const getMovieId = async (id: string) => {
  return await fetch(`${BASEURL}/${id}`).then((res) => res.json());
};

export const getVideos = async (id: string) => {
  return await fetch(`${BASEURL}/${id}/videos`).then((res) => res.json());
};

export const getCredits = async (id: string) => {
  return await fetch(`${BASEURL}/${id}/credits`).then((res) => res.json());
};

export const getProviders = async (id: string) => {
  return await fetch(`${BASEURL}/${id}/providers`).then((res) => res.json());
};

export const getSimilar = async (id: string) => {
  return await fetch(`${BASEURL}/${id}/similar`).then((res) => res.json());
};

// export const getSimilar = async (id: string) => {
//   try {
//     const res = await fetch(`${BASEURL}/${id}/similar`);
//     if (!Response.ok) {
//       throw new Error("similar movies not found");
//     }
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };
