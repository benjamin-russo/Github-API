// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { Segment } from 'semantic-ui-react';

// == Composant
const Message = ({ cardsCount, error }) => <Segment textAlign="left">{error} La recherche a donné {cardsCount} résultats.</Segment>;

Message.propTypes = {
  cardsCount: PropTypes.number,
  error: PropTypes.string,
};

Message.defaultProps = {
  cardsCount: 0,
  error: '',
};

// == Export
export default Message;
