// == Import npm
import React from 'react';
// import axios from 'axios';

// == Import
// import { Input, Segment, Card, Icon, Image, Form } from 'semantic-ui-react';
import Cards from 'src/components/Cards';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import data from 'src/data/repos';
import './styles.scss';

const handleFormSubmit = (submit) => {
  console.log("valeur de l'input", submit.target.elements[0].value);
};

// == Composant
const App = () => {
  console.log(data);
  return (
    <div className="app">
      <SearchBar handleSubmit={handleFormSubmit} />
      <Message cardsCount={data.total_count} />
      <Cards cardsData={data.items} />
    </div>
  );
};

// == Export
export default App;
