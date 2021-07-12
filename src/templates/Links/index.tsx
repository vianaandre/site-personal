import Head from 'next/head';
import React, { useContext } from 'react';

import ContextLinks from '../../context/ContextLinks';
import { LinksStyled } from '../../styles/pages/Links';
import Container from '../../styles/container';
import CardLink from '../../components/CardLink';
import Logo from '../../components/Logo';

const Links: React.FC = () => {
  const { data } = useContext(ContextLinks)

  return (
    <Container>
      <LinksStyled>
        <Head>
          <title>{data.title}</title>
        </Head>
            <header>
              <Logo />
              <h2>Desenvolvedor Frontend Junior</h2>
            </header>
            <div className={'cardsLinks'}>
              {data.links.map(({ description, imageSocial, linksSocial, id }) => (
                <CardLink  key={id}  img={imageSocial[0].url} alt={imageSocial[0].alternativeText} href={linksSocial[0].href} target={linksSocial[0].target} description={description} />
                ))}
            </div>
        </LinksStyled>
      </Container>
  )
}

export default Links
