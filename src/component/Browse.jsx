import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useTopSeries from "../hooks/useTopSeries";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcoming from "../hooks/useUpcoming";
import Header from './Header'
import MainContainer from "./MainContainer";
import SuggestionContainer from "./SuggestionContainer";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useTrendingMovies();
  useTopSeries();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SuggestionContainer/>
    </div>
 
  )
}

export default Browse