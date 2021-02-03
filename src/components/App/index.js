// == Import npm
import React from 'react';

// == Import
// import { Input, Segment, Card, Icon, Image, Form } from 'semantic-ui-react';
import Cards from 'src/components/Cards';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <Message />
    <Cards />
  </div>
);

// == Export
export default App;
