import React from 'react';
import { Link } from 'react-scroll';

import StyledButtonFloat from './styled';

const ButtonFloat: React.FC = () => {
  return (
    <StyledButtonFloat>
      <Link to='header' smooth={true} duration={500}>
        <img src={'/assets/arrowUp.svg'} alt="Ícone de Seta para Cima" />
      </Link>
    </StyledButtonFloat>
  )
}

export default ButtonFloat;
