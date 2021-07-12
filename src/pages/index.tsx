import React from 'react';

import loadPosts from '../services/loadPosts';
import { pageLinks } from '../config/index';
import Links from '../templates/Links'
import ContextLink from '../context/ContextLinks'
import { GetStaticProps } from 'next';
import HomeProps from '../types/HomeProps'

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <ContextLink.Provider value={{ data }} >
      <Links />
    </ContextLink.Provider>
  );
};


// SSG
export const getStaticProps: GetStaticProps<unknown> = async () => {
  const data = await loadPosts(pageLinks.url);

  return {
    props: {
      data,
    }
  }
}

export default Home;
