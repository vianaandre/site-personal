export type LinksProps = {
  number?: number;
  to?: string;
  title: string,
  href: string,
}

export type TitleProps = {
  sectionTitle: string,
  description?: string,
}

export type CardSkillsProps = {
  icon: {
    url: string,
    alt: string,
  }
  title: string,
  text: string,
}

export type ImageProps = {
  url: string,
  alt: string,
}

export type CardProps = {
  url: string,
  alt: string,
  description: string,
  button,
  icon
}

export type CardProcessProps = {
  id: string,
  text: string,
  image: ImageProps,
}

export type FormProps = {
  value: string;
  type?: string;
  placeholder: string;
  id: string;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
export type CardLinkProps = {
  img: string;
  alt: string;
  href: string;
  target: string;
  description: string;
}

export type CardPostsProps = {
  title: string;
  slug: string;
  img: {
    url: string;
    alt: string;
  }
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
}

export type CardsProdutosProps = {
  href: string,
  title: string,
  store: string,
  value: {
    schema: string,
    document: {
      type: string,
      children: [
        {
          type: string,
          children: [
            {
              type: string,
              value: string
            },
            {
              type: string,
              marks: [
                string
              ],
              value: string;
            },
            {
              type: string,
              value: string
            },
            {
              type: string,
              marks: [
                string
              ],
              value: string
            },
            {
              type: string,
              value: string
            },
            {
              type: string,
              marks: [
                string
              ],
              value: string
            },
            {
              type: string,
              value: string
            },
            {
              type: string,
              marks: [
                string
              ],
              value: string
            },
            {
              type: string,
              value: string
            }
          ]
        }
      ]
    }
  }
}

export type ContentProps = Array<{
  title: string,
  text: {
    value: {
      document: {
        children: Array<{
          children: Array<{
            type: string,
            children: Array<{
              type: string,
              value: string,
            }>,
          }>
        }>
      }
    }
  }
  images: Array<{
    url: string,
    alt: string,
  }>
}>
