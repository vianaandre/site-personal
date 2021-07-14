import React from "react";

import StyledFooterSites from './styled';
import FooterTitle from '../FooterTitle';

const FooterSites: React.FC = () => {
  return (
    <StyledFooterSites>
      <FooterTitle title="Sites" />
      <ul className='listLinks'>
        <li>
          <a href={'/'}>
            <p>André Viana</p>
          </a>
        </li>
        <li>
          <a href={'/portfolio'}>
            <p>Portfólio</p>
          </a>
        </li>
        <li>
          <a href={'/blog'}>
            <p>Blog</p>
          </a>
        </li>
      </ul>
    </StyledFooterSites>
  )
}

export default FooterSites;
