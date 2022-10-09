import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(Link)`
  display: block;
  text-decoration: none;
  height: 100%;
  border: 1px solid #61dafb;
  border-radius: 10px;
  overflow: hidden;
  background-color: #282c34;
  color: #61dafb;
  box-shadow: 5px 5px 5px #282c34;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px #282c34;
  }
`;