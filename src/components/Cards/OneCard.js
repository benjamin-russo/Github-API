// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import { Card, Image } from 'semantic-ui-react';

// == Composant
const OneCard = () => (
  <Card>
    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
);

// == Export
export default OneCard;
