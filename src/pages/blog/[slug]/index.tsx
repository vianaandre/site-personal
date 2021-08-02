import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import loadDatoCMS from '../../../services/load-dato-cms';
import { allSlugQuery } from '../../../config/queryes';
import { allCardpostsQuery } from '../../../config/queryes';
import PostProps from '../../../types/postProps';
import ContextPost from '../../../context/ContextPost'
import TemplatePost from '../../../templates/Post';
import Loading from '../../../templates/Loading';

const Post: React.FC<PostProps> = ({ data }) => {
  const router = useRouter()

  if(router.isFallback){
    return <Loading />
  }

  return (
    <ContextPost.Provider value={{ data }}>
       <TemplatePost />
    </ContextPost.Provider>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {

  // @ts-ignore: Unreachable code error
  const data:  {
    allCardposts: Array<{
      slug: string,
      faviconpage: {
        url: string,
        alt: string
      }
      title: string,
    }>
  } = await loadDatoCMS(allSlugQuery)

  const paths = data.allCardposts.map(({ slug }) => {
    return { params: { slug: slug} }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<unknown> = async (ctx) => {
  let numberPostCurrent = null

  // @ts-ignore: Unreachable code error
  const data: {
    allCardposts: Array<{
      slug: string,
      faviconpage: {
        url: string,
        alt: string
      }
      title: string,
    }>
  }   = await loadDatoCMS(allCardpostsQuery)

  data.allCardposts.map(({ slug }, index) => {
    if(slug === ctx.params.slug) {
       numberPostCurrent = index
    }
  })

  return {
    props: {
      data: data.allCardposts[numberPostCurrent]
    }
  }
}

export default Post
