import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 110px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #282c34;
    color: white;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  color: black;
  background-color: #9c9efc;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #1e489c;
    color: white;
  }
  &.active {
    outline: 2px solid blue;
    background-color: #1e489c;
    color: white;
  }
`;

export const Heading1 = styled.h1`
  margin-bottom: 20px;
`;

export const Heading3 = styled.h3`
  margin-bottom: 15px;
`;

export const Heading4 = styled.h4`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;