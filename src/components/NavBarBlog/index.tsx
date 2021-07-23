import React, { useEffect, useState } from 'react';
import Link from 'next/link'

import StyledNavBarBlog from './styled';
import Container from '../../styles/container';

const NavBarBlog: React.FC = () => {

  const [ stateLink, setStateLink ] = useState(String)

  useEffect(() => {
    const href = window.location.pathname

    setStateLink(href)
  }, [])

  return (
    <Container>
      <StyledNavBarBlog>
        <nav>
          <Link href='/blog' prefetch={true} >
            <a  className={stateLink == '/blog/' ? 'color' : ''} > Artigos </a>
          </Link>
          <Link href='/blog/produtos/' prefetch={true}>
            <a className={stateLink == '/blog/produtos/' ? 'color' : ''}> Produtos </a>
          </Link>
        </nav>
      </StyledNavBarBlog>
    </Container>
  )
}

export default NavBarBlog;
