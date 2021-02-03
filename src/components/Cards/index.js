// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { Card } from 'semantic-ui-react';
import OneCard from './OneCard';

// == Composant
const Cards = ({ cardsData }) => {
  const cards = cardsData.map((card) => (
    <OneCard
      key={card.id}
      title={card.name}
      text={card.description}
      owner={card.owner.login}
      image={card.owner.avatar_url}
    />
  ));
  return (
    <Card.Group itemsPerRow={3}>
      {cards}
    </Card.Group>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

// == Export
export default Cards;
