import Head from 'next/head';
import React, { useContext } from 'react';

import ContextLinks from '../../context/ContextLinks';
import { LinksStyled } from '../../styles/pages/Links';
import Container from '../../styles/container';
import CardLink from '../../components/CardLink';
import Logo from '../../components/Logo';
import Copyrigth from '../../components/Copyrigth';

const Links: React.FC = () => {
  const { data } = useContext(ContextLinks)

  return (
    <Container>
      <LinksStyled>
        <Head>
          <title>André | Links</title>
        </Head>
            <header>
              <Logo />
              <h2>Desenvolvedor Frontend Júnior</h2>
            </header>
            <div className={'cardsLinks'}>
              {data.allLinks.map(({ href, icon, title }, index) => (
                <CardLink  key={index}  img={icon.url} alt={icon.alt} href={href} target={'self'} description={title} />
                ))}
            </div>
          <Copyrigth />
        </LinksStyled>
      </Container>
  )
}

export default Links
