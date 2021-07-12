type linksSocial = {
  name: string,
  href: string,
  target: string
}

type ImageSocialProps = {
  alternativeText: string,
  url: string,
}

type LinksProps = {
  imageSocial: Array<ImageSocialProps>,
  id: string,
  description: string,
  linksSocial: Array<linksSocial>
}

type HomeProps = {
  data: {
    title: string,
    slug: string,
    links: Array<LinksProps>
  }
}

export default HomeProps;
