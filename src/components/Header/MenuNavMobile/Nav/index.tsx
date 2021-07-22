import React from 'react';

import StyledNav from './styled';
import CardLink from '../../CardLinkHeader';
import links from '../../data';

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {links.map(({ href, title }, index) => (
        <CardLink key={index} href={href} name={title} />
       ))}
    </StyledNav>
  )
}

export default Nav;
