import React from 'react';
import Button from '../Button/Button';

import { CharacterListItemContainer, CharacterItemImage } from '../../styles';

const charactersListItem = () => (
  <CharacterListItemContainer>
    <h1> character name </h1>
    <CharacterItemImage src="https://amp.insider.com/images/5b70598ebda1c727008b456d-750-375.jpg" />
    <p>Description</p>
    <Button>Details</Button>
  </CharacterListItemContainer>
);

export default charactersListItem;
