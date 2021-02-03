// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { Segment } from 'semantic-ui-react';

// == Composant
const Message = ({ cardsCount }) => (
  <Segment textAlign="left">La recherche a donné {cardsCount} résultats.</Segment>
);

Message.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

// == Export
export default Message;
