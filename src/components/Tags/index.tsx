import React from 'react';

import Container from '../../styles/container';
import StyledTag from './styled';

const Tags: React.FC = () => {
  return (
    <Container>
      <StyledTag>
        <h3>Tags:</h3>
        <div className="tags">
          <ul>
            <li>#tecnologia</li>
            <li>#programacao</li>
            <li>#economia</li>
          </ul>
        </div>
      </StyledTag>
    </Container>
  )
}

export default Tags;
