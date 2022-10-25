import { useEffect ,useContext} from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { GlobalContext } from '../context/context';
import { HorizontalOverflowContainer } from '../pages/Home';
import Loading from '../utils/loadingAnimation';

const PopularMovies = () => {

   const { popularMovies , getPopularMoviesOnTMDB } = useContext(GlobalContext);
   useEffect(() => {
     getPopularMoviesOnTMDB();
   }, []);

  return (
    <PopularMoviesWrapper>
      <h2>Most popular</h2>
      {!popularMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {popularMovies?.results?.map((movie) => (
            <div style={{ display: "inline-block" }}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </HorizontalOverflowContainer>
      )}
    </PopularMoviesWrapper>
  );
}

const PopularMoviesWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
`;

export default PopularMovies