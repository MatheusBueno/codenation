import styled from 'styled-components';

import colors from './colors';

export const Navbar = styled.div`
  height: 80px;
  width: 100%;

  background: black;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const Input = styled.input`
  margin: 20px;
  min-width: 300px;
  height: 28px;
  padding: 5px;
`;

export const DetailButton = styled.button`
  background: ${colors.v8};
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #fff;
  font-size: 18px;
`;

export const CharacterListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const CharacterListItemContainer = styled.div`
  margin: 20px;
  padding: 10px;
  background: #fff;
`;

export const CharacterItemImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 20px 0;
  object-fit: contain;
`;
