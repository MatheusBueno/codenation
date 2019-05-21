import React, { Component } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import { Input } from '../../styles/index';

const Field = ({ component, ...props }) => <Input {...props} />;

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={() => console.log()}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
