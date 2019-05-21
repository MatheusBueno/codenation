import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

import CharacterListItem from '../CharacterListItem/CharacterListItem';
import { CharacterListContainer } from '../../styles/index';
import CharacterService from '../../services/characters';
import { marvelApi } from '../../config/config';

const CharacterList = () => {
  useEffect(() => {
    CharacterService.getCharacters({
      timeStamp: Date.now(),
      publicKey: marvelApi.publicKey,
      name: 'thor',
      limit: 35
    })
      .then(x => console.log(x))
      .catch(e => console.log(e));
  }, []);

  return (
    <CharacterListContainer>
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
    </CharacterListContainer>
  );
};

// function mapStateToProps(state) {
//   return {};
// }

// export default connect(mapStateToProps)(CharacterList);
export default CharacterList;
