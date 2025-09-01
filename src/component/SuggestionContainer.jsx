// import MovieList from './MovieList'
// import { useSelector } from 'react-redux';

// const SuggestionContainer = () => {
//   const movies = useSelector((store) => store.movies);

//   if (!movies?.nowPlayingMovies) return null;
//   console.log(movies.popularMovies);
//   console.log(movies.topSeries);

//   return (
//     <div className='bg-black relative'>
//       <div className="absolute text-white md:px-12 py-6 space-y-8 -mt-35 z-100">
        
//       </div>
//     </div>
//   );
// };

// export default SuggestionContainer;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-35 pl-4 md:pl-12 relative z-20 text-white">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.trending} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top Rated Movies" movies={movies.topRated} />
          <MovieList title="Top Rated Series" movies={movies.topSeries} />
          <MovieList title="Upcoming" movies={movies.upcoming} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;