import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import CharacterListItem from '../CharacterListItem/CharacterListItem';
import { CharacterListContainer } from '../../styles/index';

const CharacterList = ({ charactersList }) => {
  useEffect(() => {
    console.log(charactersList);
  }, [charactersList]);

  return (
    <CharacterListContainer>
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
    </CharacterListContainer>
  );
};

function mapStateToProps(state) {
  return {
    charactersList: state.characters.characterList
  };
}

export default connect(mapStateToProps)(CharacterList);
