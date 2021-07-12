export type LinksProps = {
  id?: string,
  title: string,
  href: string,
  target: string,
  name?: string,
}

export type TitleProps = {
  sectionTitle: string,
  description?: string,
}

export type ImageProps = {
  alternativeText: string,
  url: string,
}

export type CardProps = {
  id?: string,
  imageProject: { image: ImageProps },
  titleProject: TitleProps,
  buttonActions: Array<LinksProps>,
  cases: Array<{ image: ImageProps }>
}

export type CardProcessProps = {
  id: string,
  text: string,
  image: ImageProps,
}
