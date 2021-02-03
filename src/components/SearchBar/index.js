// == Import npm
import React from 'react';

// == Import
import { Input, Segment, Form } from 'semantic-ui-react';
import githubLogo from './logo-github.png';
import './styles.scss';

// == Composant
const SearchBar = () => (
  <div>

    <header className="header">
      <img src={githubLogo} alt="" className="header__logo" />
    </header>

    <Segment size="large">
      <Form>
        <Input icon="search" placeholder="Search..." />
      </Form>
    </Segment>

  </div>
);

// == Export
export default SearchBar;
