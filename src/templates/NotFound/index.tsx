import React from 'react';
import Head from 'next/head'

import StyledNotFound from '../../styles/pages/NotFound';
import ArrowBack from '../../assets/backPageNotfound.svg';
import Container from '../../styles/container';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Head>

        <title>André | 404</title>

      </Head>
      <StyledNotFound>
        <div className="title">
          <h1>
            404
          </h1>
        </div>
        <h2>Essa página não existe amigo!</h2>
        <a href="/" className={'initial'}>
          <ArrowBack />
          <p>Voltar para página inicial</p>
        </a>
        <span>ou</span>
        <div className={'linksArtenativos'}>
        <a href="/portfolio">
          <img src={'https://www.datocms-assets.com/52328/1626549560-linksportfolio.svg'} alt="Logod do Portfólio"/>
          <div>
            <p>Portfólio</p>
          </div>
        </a>
        <a href="/blog">
          <img src={'https://www.datocms-assets.com/52328/1626549610-linksblog.svg'} alt="Logo do Blog" />
          <div>
            <p>Blog</p>
          </div>
        </a>
        </div>
      </StyledNotFound>
    </Container>
  )
}

export default NotFound;
