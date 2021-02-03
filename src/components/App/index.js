// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

// == Import
// import { Input, Segment, Card, Icon, Image, Form } from 'semantic-ui-react';
import Cards from 'src/components/Cards';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
// import data from 'src/data/repos';
import './styles.scss';

// == Composant
const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  console.log(data);

  const handleFormSubmit = (submit) => {
    console.log("valeur de l'input", submit.target.elements[0].value);
    const { value } = submit.target.elements[0];
    axios.get(`https://api.github.com/search/repositories?q=${value}`).then(
      (response) => {
        setData(response.data);
        setError('');
      },
    ).catch(
      (responseError) => {
        setError('ERROR 404');
        console.log(responseError);
      },
    );
  };

  return (
    <div className="app">
      <SearchBar handleSubmit={handleFormSubmit} />
      {data && <Message cardsCount={data.total_count} />}
      {data && <Cards cardsData={data.items} />}
      {!data && <Message error={error} />}
    </div>
  );
};

// == Export
export default App;
