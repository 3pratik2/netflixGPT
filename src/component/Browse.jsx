import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from './Header'
import MainContainer from "./MainContainer";
import SuggestionContainer from "./SuggestionContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SuggestionContainer/>
    </div>
 
  )
}

export default Browse