import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { loadCharacter } from '../../redux/characters/types';

const Home = ({ loadCharacter }) => {
  const [characterName, setCharacterName] = useState('');

  const handleSearch = e => {
    const { value } = e.target;
    setCharacterName(value);
    console.log(characterName);

    loadCharacter(value);
  };

  return (
    <Fragment>
      <Nav />
      <SearchBar characterName={characterName} handleSearch={handleSearch} />
      <CharacterList />
    </Fragment>
  );
};

function mapStateToProps() {
  return {};
}

const mapDispathToProps = dispatch => bindActionCreators({ loadCharacter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
