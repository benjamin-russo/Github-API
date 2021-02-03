// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { Input, Segment, Form } from 'semantic-ui-react';
import githubLogo from './logo-github.png';
import './styles.scss';

// == Composant
const SearchBar = ({ handleSubmit }) => (
  <div>

    <header className="header">
      <img src={githubLogo} alt="" className="header__logo" />
    </header>

    <Segment size="large">
      <Form onSubmit={handleSubmit}>
        <Input icon="search" placeholder="Search..." />
      </Form>
    </Segment>

  </div>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
