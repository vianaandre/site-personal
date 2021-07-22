import React, { useEffect, useState } from "react";

import Logo from '../Logo'
import CardLink from './CardLinkHeader'
import MenuNavMobile from './MenuNavMobile';
import StyledHeader from './styled'
import links from './data';

const Header: React.FC = () => {
  const [ state, setState ] = useState(Boolean)

  useEffect(() => {
    const document = window.innerWidth

    const verificationDocument = document > 767 ? true : false

    setState(verificationDocument)
  }, [state])

  return (
    <StyledHeader id={'header'}>
        <header>
          <div className="logo">
            <Logo />
          </div>
          <nav className='nav'>
            {links.map(({ href, title }) => (
               <div key={title} className={'actionLinks'}>
                <CardLink  href={href} name={title} />
              </div>
            ))}
          </nav>
          <div className="navMobile">
            <MenuNavMobile />
          </div>
        </header>
    </StyledHeader>
  )
}

export default Header
