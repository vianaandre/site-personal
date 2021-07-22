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
