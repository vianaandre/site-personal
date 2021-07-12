import React, { useContext } from 'react';

import ContextPortfolio from '../../context/ContextPortfolio';
import StyledNavBar from './styled';
import Link from '../Link';

const NavBar: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  return (
      <StyledNavBar>
        <div className="links">
        { data.sections[0].links.map(({ href, target, title, id }) => (
          <button key={id}>
            <Link href={href} target={target} title={title}  />
          </button>
        ))}
        </div>
      </StyledNavBar>
  )
}

export default NavBar
