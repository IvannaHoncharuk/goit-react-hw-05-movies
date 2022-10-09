import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Section from 'components/Section/Section';
import { getFetchMovieDetails } from 'services/api';
import { Box } from 'components/Box';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  Btn,
  Heading1,
  Heading3,
  Heading4,
  Img,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState(() => null);

  useEffect(() => {
    (async () => {
      setMovie(await getFetchMovieDetails(movieId));
    })();
  }, [movieId]);

  return (
    <>
      {movie && (
        <Section>
          <Link to={backLinkHref}>
            <Btn type="button">
              <IoMdArrowRoundBack />
              Go back
            </Btn>
          </Link>
          <Box display="flex" gridGap={4} mb={4}>
            <Box flexBasis="300px" flexGrow="0" flexShrink="0">
              <Img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt={movie.title}
              />
            </Box>
            <div>
              <Heading1>
                {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
              </Heading1>
              <Heading3>Overview</Heading3>
              <p>{movie.overview}</p>
              <p>
                <b>User score: </b>
                {((movie.vote_average / 10) * 100).toFixed(2)}%
              </p>
              <Heading4>Genres:</Heading4>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </Box>
          <div>
            <Heading4>Additional information</Heading4>
            <Box as="ul" display="flex" gridGap={3}>
              <li>
                <StyledLink to="cast" state={{ from: backLinkHref }}>
                  Cast
                </StyledLink>
              </li>
              <li>
                <StyledLink to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </StyledLink>
              </li>
            </Box>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Section>
      )}
    </>
  );
};

export default MovieDetails;