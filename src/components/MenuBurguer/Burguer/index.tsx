import React from 'styled-components';

import StyledBurguer from './styled';

type BurguerProps = {
  open: boolean,
  handleOpen: () => void,
}

const Burguer: React.FC<BurguerProps> = ({ open, handleOpen }) => {
  return (
    <StyledBurguer>
      <button  disabled={open} onClick={handleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </StyledBurguer>
  )
}

export default Burguer;
