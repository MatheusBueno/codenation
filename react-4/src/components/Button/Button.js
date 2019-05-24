import React from 'react';
import { withRouter } from 'react-router-dom';

import { DetailButton, EditButton } from '../../styles/index';

const Button = withRouter(
  ({
    saveButton,
    handleSaveButton,
    editButton,
    handleEditButton,
    selectCharacter,
    characterDetail,
    history
  }) => {
    const sendToDetailPage = () => {
      selectCharacter(characterDetail);
      history.push('/details');
    };

    const renderButton = () => {
      if (editButton !== undefined) {
        return <EditButton onClick={handleEditButton}> Editar </EditButton>;
      }
      if (saveButton !== undefined) {
        return <EditButton onClick={handleSaveButton}> Salvar </EditButton>;
      }
      return <DetailButton onClick={sendToDetailPage}>Detalhes</DetailButton>;
    };

    return renderButton();
  }
);

export default Button;
