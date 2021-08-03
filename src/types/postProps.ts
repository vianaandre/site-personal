import { ContentProps } from './types'

type PostProps = {
  data: {
    descriptiontext: string,
    title: string,
    slug: string,
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
