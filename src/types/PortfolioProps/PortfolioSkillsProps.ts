import { ImageProps, TitleProps } from "../types"

type PortfolioSkillsProps = {
  sectionTitle: TitleProps,
  cardSkills: Array<{
    _id: string,
    nameCase: string,
    caseDescription: string,
    imageCase: ImageProps
  }>
}

export default PortfolioSkillsProps
