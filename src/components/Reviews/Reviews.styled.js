import styled from 'styled-components';

export const ContentBox = styled.div`
  background-color: wheat;
  border-radius: 10px;
  padding: 20px;
`;

export const Content = styled.p`
  text-indent: 50px;
`;

export const Rating = styled.span`
  display: inline-block;
  min-width: 30px;
  text-align: center;
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