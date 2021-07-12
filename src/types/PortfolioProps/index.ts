import PortfolioAboutProps from "./PortfolioAboutProps"
import PortfolioApresentationProps from "./PortfolioApresentationProps"
import PortfolioNavBarProps from "./PortfolioNavBarProps"
import PortfolioProcessProps from "./PortfolioProcessProps"
import PortfolioProjectProps from "./PortfolioProjectProps"
import PortfolioSkillsProps from "./PortfolioSkillsProps"

type SectionProps = [
  PortfolioNavBarProps,
  PortfolioApresentationProps,
  PortfolioProjectProps,
  PortfolioProcessProps,
  PortfolioAboutProps,
  PortfolioSkillsProps
]

type PortfolioProps = {
  data: {
    title: string,
    slug: string,
    sections: SectionProps,
  }
}

export default PortfolioProps
