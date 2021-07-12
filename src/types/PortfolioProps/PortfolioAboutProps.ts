import { ImageProps, LinksProps, TitleProps } from "../types";

type PortfolioAboutProps = {
  titleText: string,
  text: string,
  sectionTitle: TitleProps,
  Information: Array<{
    id: string,
    informationPersonal: string,
    image: ImageProps
  }>,
  ButtonCV: LinksProps
}

export default PortfolioAboutProps
