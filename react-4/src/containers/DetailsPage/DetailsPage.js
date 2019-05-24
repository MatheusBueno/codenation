import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CharacterItemImage, DetailPageContainer, Row, Input } from '../../styles/index';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';
import * as characterActions from '../../redux/characters/types';

const DetailsPage = ({ characterSelected, changeCharacterName }) => {
  const [editButton, setEditButton] = useState(false);
  const [characterNameInput, setCharacterNameInput] = useState(characterSelected.name);

  useEffect(() => {
    console.log(characterSelected);
  }, []);

  const handleEditButton = e => {
    setEditButton(!editButton);
    e.preventDefault();
  };

  const handleSaveButton = e => {
    changeCharacterName(characterNameInput, characterSelected.id);
    handleEditButton(e);
    e.preventDefault();
  };

  const renderSerieItem = serieItem =>
    serieItem.map((serie, i) => <li key={i.toString()}> {serie.name} </li>);

  return (
    <Fragment>
      <Nav />
      <DetailPageContainer>
        <Row>
          {editButton ? (
            <Fragment>
              <Input
                onChange={e => setCharacterNameInput(e.target.value)}
                value={characterNameInput}
              />
              <Button saveButton handleSaveButton={handleSaveButton} />
            </Fragment>
          ) : (
            <Fragment>
              <h1>{characterSelected.name}</h1>
              <Button editButton={editButton} handleEditButton={handleEditButton} />
            </Fragment>
          )}
        </Row>

        <p> {characterSelected.description} </p>
        <CharacterItemImage
          height="400px"
          src={`${characterSelected.thumbnail.path}.${characterSelected.thumbnail.extension}`}
        />
        <h4>Series</h4>
        <ul>{renderSerieItem(characterSelected.series.items)}</ul>
      </DetailPageContainer>
    </Fragment>
  );
};

function mapStateToProps({ characters }) {
  return {
    characterSelected: characters.characterSelected
  };
}

const mapDispathToProps = dispatch => bindActionCreators(characterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(DetailsPage);
