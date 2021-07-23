import React from 'react';
import Head from 'next/head';

import StyledBlog from '../../styles/pages/Blog';
import Header from '../../components/Header';
import NavBarBlog from '../../components/NavBarBlog';
import Posts from '../../components/Posts';
import Share from '../../components/Share';
import Tags from '../../components/Tags';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const TemplateBlog: React.FC = () => {
  return (
    <StyledBlog>
      <Head>

        <title>André | Blog</title>

      </Head>
      <Header />
      <NavBarBlog />
      <Posts />
      <Share />
      <Tags />
      <Newsletter />
      <Footer />
    </StyledBlog>
  )
}

export default TemplateBlog;
