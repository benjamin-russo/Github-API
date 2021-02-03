// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import { Card } from 'semantic-ui-react';
import OneCard from './OneCard';

// == Composant
const Cards = () => (
  <Card.Group itemsPerRow={3}>
    <OneCard />
  </Card.Group>
);

// == Export
export default Cards;
