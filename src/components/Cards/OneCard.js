// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { Card, Image } from 'semantic-ui-react';

// == Composant
const OneCard = ({
  title,
  text,
  owner,
  image,
}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className="date">{owner}</span>
      </Card.Meta>
      <Card.Description>
        {text}
      </Card.Description>
    </Card.Content>
  </Card>
);

OneCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

OneCard.defaultProps = {
  text: '',
};

// == Export
export default OneCard;
