// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import { Segment } from 'semantic-ui-react';

// == Composant
const Message = () => (
  <Segment textAlign="left">La recherche a donné 1000000 résultats.</Segment>
);

// == Export
export default Message;
