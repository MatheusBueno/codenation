import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CharacterListItem from '../CharacterListItem/CharacterListItem';
import { CharacterListContainer } from '../../styles/index';
import * as characterActions from '../../redux/characters/types';

const CharacterList = ({ selectCharacter, charactersList }) => {
  useEffect(() => {
    console.log(charactersList);
  });

  const renderCharacterItem = () => {
    console.log(charactersList);

    return charactersList.map((characterDetail, index) => (
      <CharacterListItem
        selectCharacter={selectCharacter}
        characterDetail={characterDetail}
        key={index.toString()}
      />
    ));
  };

  return <CharacterListContainer>{renderCharacterItem()}</CharacterListContainer>;
};

function mapStateToProps({ characters }) {
  return {
    charactersList: characters.characterList
  };
}

const mapDispathToProps = dispatch => bindActionCreators(characterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(CharacterList);
