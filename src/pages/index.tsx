import React from 'react';
import Head from 'next/head';

import Logo from '../../public/logo.svg'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>My App</title>
      </Head>
      <Logo />
      <h1>André Gustavo Viana</h1>
      <p>
        Configuração de Ambiente de desenvolvimento para as tecnologias NextJS + Typescript.
      </p>
    </Container>
  );
};

export default Home;
