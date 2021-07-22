import React, { useState } from "react";

import { Drawer } from '@material-ui/core';
import StyledMenuNavMobile from './styled';
import Nav from './Nav';

const MenuNavMobile: React.FC = () => {

  const [ state, setState ] = useState(false);

  const toggleDrawer = (open) => () => {
    setState(open)
  }

  return (
    <StyledMenuNavMobile>
      <button onClick={toggleDrawer(true)} className="buttonBurguer">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="drawer">
        <Drawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          <Nav />
        </Drawer>
      </div>
    </StyledMenuNavMobile>
  )
}

export default MenuNavMobile;
