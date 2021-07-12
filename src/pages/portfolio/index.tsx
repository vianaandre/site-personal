import { GetStaticProps } from "next";
import React from "react";

import loadPosts from '../../services/loadPosts';
import { pagePortfolio } from '../../config/index';
import PortfolioProps from '../../types/PortfolioProps';
import ContextPortfolio from '../../context/ContextPortfolio';
import TemplatePortfolio from '../../templates/Portfolio';

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <ContextPortfolio.Provider value={{ data }} >
      <TemplatePortfolio />
    </ContextPortfolio.Provider>
  )
};


export const getStaticProps: GetStaticProps<unknown> = async () => {

  const data = await loadPosts(pagePortfolio.url);

  return {
    props: {
      data,
    }
  }
}

export default Portfolio
