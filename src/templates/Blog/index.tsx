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
import dataHref from '../../services/Data/datatHref';
import dataTags from '../../services/Data/dataTags';
import Container from '../../styles/container';
import ButtonFloat from '../../components/ButtonFloat';
import Copyrigth from '../../components/Copyrigth';

const TemplateBlog: React.FC = () => {
  return (
    <StyledBlog>
      <Head>

        <title>André | Blog</title>

      </Head>
      <Header />
      <NavBarBlog />
      <Posts />
      <Container>
        <Share href={dataHref} />
        <Tags  tags={dataTags} />
      </Container>
      <Newsletter />
      <Footer />]
      <Copyrigth />
      <ButtonFloat />
    </StyledBlog>
  )
}

export default TemplateBlog;
