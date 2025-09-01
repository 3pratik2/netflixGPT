import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import Videotitle from "./Videotitle"
import { useEffect, useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && !mainMovie) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMainMovie(movies[randomIndex]);
    }
  }, [movies, mainMovie]);

  if (!mainMovie) return null;    

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen bg-gradient-to-r from-black/70 to-transparent"> 
      <Videotitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>      
    </div>
  )
}

export default MainContainer;
