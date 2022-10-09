import { useState } from 'react';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import Input from 'components/Input/Input';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  return (
    <Section>
      <Input setMovies={setMovies} />
      {movies && <MoviesGallery movies={movies} />}
    </Section>
  );
};

export default Movies;