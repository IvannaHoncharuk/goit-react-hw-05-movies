import { useEffect, useState } from 'react';
import { getFetchTrending } from 'services/api';
import { Heading } from './Home.styled';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';

const Home = () => {
  const [movies, setMovies] = useState(() => []);

  useEffect(() => {
    (async () => {
      setMovies(await getFetchTrending());
    })();
  }, []);

  return (
    <Section>
      <Heading>Trending today</Heading>
      <MoviesGallery movies={movies} />
    </Section>
  );
};

export default Home;