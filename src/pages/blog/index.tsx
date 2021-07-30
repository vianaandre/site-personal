import { GetStaticProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

import loadDatoCMS from '../../services/load-dato-cms';
import { allCardpostsQuery } from '../../config/queryes';
import BlogPosts from '../../types/blogPosts';
import ContextBlog from '../../context/ContextBlog';
import TemplateBlog from '../../templates/Blog';
import Loading from '../../templates/Loading';

const Blog: React.FC<BlogPosts> = ({ data }) => {

  const router = useRouter();

  if(router.isFallback) {
    return <Loading />
  }

  return (
    <ContextBlog.Provider value={{ data }}>
      <TemplateBlog />
    </ContextBlog.Provider>
  )
}

export const getStaticProps: GetStaticProps<unknown> = async () => {

  const data = await loadDatoCMS(allCardpostsQuery);

  return {
    props: {
      data,
    }
  }
}

export default Blog;
