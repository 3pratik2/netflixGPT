import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { Api_options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        Api_options
      );
      const data = await res.json();

      // Find a YouTube trailer
      const trailer =
        data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        ) || data.results[0];

      dispatch(addTrailerVideo(trailer || null));
    } catch (err) {
      console.error("Error fetching movie trailer:", err);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideo();
  }, [movieId]);
};

export default useMovieTrailer;
