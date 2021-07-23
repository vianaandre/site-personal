import { ContentProps } from './types'

type PostProps = {
  data: {
    title: string,
    slug: string,
    faviconpage: {
      url: string,
      alt: string,
    }
    auto: string,
    data: string
    tag: Array<{
      tag: string,
    }>,
    thumbnail: {
      url: string,
      alt: string,
    },
    content: ContentProps
  }
}

export default PostProps;
