import React from 'react';

import Button from '../Button/Button';
import { CharacterListItemContainer, CharacterItemImage } from '../../styles';

const charactersListItem = ({ selectCharacter, characterDetail }) => (
  <CharacterListItemContainer>
    <h1> {characterDetail.name} </h1>
    <CharacterItemImage
      src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
    />
    <p> {characterDetail.description} </p>
    <Button characterDetail={characterDetail} selectCharacter={selectCharacter} />
  </CharacterListItemContainer>
);

export default charactersListItem;
