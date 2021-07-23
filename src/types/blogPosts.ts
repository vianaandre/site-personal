import { ContentProps } from './types';

type BlogPosts = {
  data: {
    allCardposts: Array<{
      title: string,
      slug: string,
      faviconpage: {
        url: string,
        alt: string,
      }
      auto: string,
      data: string,
      description: {
        value: {
          schema: string,
          document: {
            type: string,
            children: Array<{
              type: string,
              children: Array<{
                type: string,
                value: string,
              }>
            }>
          }
        }
      },
      tag: Array<{
        tag: string,
      }>,
      thumbnail: {
        url: string,
        alt: string,
      },
      content: ContentProps
    }>
  }
}

export default BlogPosts;
