import React from "react";

import Logo from '../Logo'
import CardLink from './CardLinkHeader'
import StyledHeader from './styled'

type LinksProps = {
  href: string,
  name: string,
  target: string
}

const links: Array<LinksProps > = [
  {
    href: '/',
    name: 'Link',
    target: 'self'
  },
  {
    href: '/portfolio',
    name: 'Portfólio',
    target: 'self'
  },
  {
    href: '/blog',
    name: 'Blog',
    target: 'self'
  }
]

const Header: React.FC = () => {
  return (
    <StyledHeader>
        <header>
          <Logo />
          <nav>
            {links.map(({ href, name, target }) => (
               <div key={name} className={'actionLinks'}>
                <CardLink  href={href} target={target} name={name} />
              </div>
            ))}
          </nav>
        </header>
    </StyledHeader>
  )
}

export default Header
