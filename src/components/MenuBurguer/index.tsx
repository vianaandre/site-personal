import React, { useState } from 'react';


import StyledDrawer from './styled';
import Burguer from './Burguer';

const MenuBurguer: React.FC = () => {

  const [ open, setOpen ] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <StyledDrawer>
      <Burguer open={open} handleOpen={handleOpen}  />
    </StyledDrawer>
  )
}

export default MenuBurguer;
