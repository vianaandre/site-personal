import React from 'react';

import LinkProps from '../types/typeLink';
import ContextLink from '../context/ContextLinks'
import { GetStaticProps } from 'next';
import loadDatoCMS from '../services/load-dato-cms';
import { allLinksQuery } from '../config/queryes';
import Links from '../templates/Links';

const Home: React.FC<LinkProps> = ({ data }) => {

  return (
    <ContextLink.Provider value={{ data }}>
      <Links />
    </ContextLink.Provider>
  );
};


// SSG
export const getStaticProps: GetStaticProps<unknown> = async () => {

  const data = await loadDatoCMS(allLinksQuery)

  return {
    props: {
      data,
    }
  }
}

export default Home;
