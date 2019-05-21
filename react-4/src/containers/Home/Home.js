import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';

const Home = () => (
  <Fragment>
    <Nav />
    <SearchBar onChange={e => console.log(e)} />
    <CharacterList />
  </Fragment>
);

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
