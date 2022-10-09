import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: block;
  height: 351px;
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  p:first-child {
    margin-bottom: 10px;
  }
`;

export const Rating = styled.span`
  padding: 5px;
  background-color: ${({ rating }) => {
    if (rating > 6) {
      return '#6c3';
    }
    if (rating >= 4 && rating <= 6) {
      return '#fc3';
    }
    return '#f00';
  }};
  border-radius: 10px;
  color: ${({ rating }) => (rating >= 4 && rating <= 6 ? 'black' : 'white')};
`;