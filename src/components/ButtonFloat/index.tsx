import React from 'react';
import { Link } from 'react-scroll';

import StyledButtonFloat from './styled';
import ArrowUp from '../../assets/arrowUp.svg';

const ButtonFloat: React.FC = () => {
  return (
    <StyledButtonFloat>
      <Link to='header' smooth={true} duration={500}>
        <ArrowUp />
      </Link>
    </StyledButtonFloat>
  )
}

export default ButtonFloat;
