import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetchMovieReviews } from 'services/api';
import { ContentBox, Content, Rating } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      setReviews(await getFetchMovieReviews(movieId));
    })();
  }, [movieId]);

  return (
    <Box>
      {!reviews.length > 0 ? (
        <p>No reviews</p>
      ) : (
        <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
          {reviews.map(
            ({
              id,
              author,
              author_details: { rating },
              content,
              created_at,
            }) => {
              return (
                <ContentBox key={id}>
                  <p>
                    <b>Author:</b> {author}
                  </p>
                  <p>
                    <b>Rating:</b>{' '}
                    <Rating rating={rating}>
                      {rating ? rating : 'Not rated'}
                    </Rating>
                  </p>
                  <p>
                    <b>Review:</b>
                  </p>
                  <Content>{content}</Content>
                  <p>
                    <b>Created at: </b>{' '}
                    {new Date(created_at).toLocaleDateString('en-US')}
                  </p>
                </ContentBox>
              );
            }
          )}
        </Box>
      )}
    </Box>
  );
};

export default Reviews;