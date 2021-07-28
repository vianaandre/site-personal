import React from 'react';
import { useRouter } from 'next/router';

import LinkProps from '../types/typeLink';
import ContextLink from '../context/ContextLinks'
import { GetStaticProps } from 'next';
import loadDatoCMS from '../services/load-dato-cms';
import { allLinksQuery } from '../config/queryes';
import Links from '../templates/Links';
import Loading from '../templates/Loading';

const Home: React.FC<LinkProps> = ({ data }) => {
  const router = useRouter()

  if(router.isFallback) {
    return <Loading />
  }

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
