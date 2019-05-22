import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import { Input } from '../../styles/index';

const Field = ({ component, ...props }) => <Input {...props} />;

const SearchBar = ({ characterName, handleSearch }) => (
  <div>
    <Field
      name="searchform"
      placeholder="Buscar Personagens"
      component={SearchForm}
      type="text"
      onChange={handleSearch}
      value={characterName}
      data-testid="SearchBar"
    />
  </div>
);

export default SearchBar;
