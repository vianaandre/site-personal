import { GetStaticProps } from 'next';
import React from 'react';

import loadDatoCMS from '../../services/load-dato-cms';
import { allCardpostsQuery } from '../../config/queryes';
import BlogPosts from '../../types/blogPosts';
import ContextBlog from '../../context/ContextBlog';
import TemplateBlog from '../../templates/Blog';

const Blog: React.FC<BlogPosts> = ({ data }) => {

  console.log(data)

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
