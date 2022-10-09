import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetchMovieCast } from 'services/api';
import { Img } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    (async () => {
      const credits = await getFetchMovieCast(movieId);
      setCast(credits.cast);
    })();
  }, [movieId]);

  return (
    <Box>
      {!cast.length > 0 ? (
        <p>No cast</p>
      ) : (
        <Box
          as="ul"
          display="grid"
          gridTemplateColumns="repeat(5, 1fr)"
          gridGap="10px"
        >
          {cast.slice(0, 20).map(({ id, name, character, profile_path }) => (
            <Box as="li" key={id} width="200px">
              <Img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://dummyimage.com/200x300/000/fff&text=No+photo'
                }
                alt={name}
              />
              <p>
                <b>{name}</b>
              </p>
              <p>Character: {character}</p>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cast;