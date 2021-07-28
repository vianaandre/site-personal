import { GetStaticProps } from "next";
import React from "react";
import { useRouter } from 'next/router';

import loadDatoCMS from '../../services/load-dato-cms';
import { allCardprojectsQuery, allCardprocessesQuery, textsobreQuery, allCardskillsQuery } from '../../config/queryes';
import PortfolioProps from '../../types/portfolioCardsProps';
import ContextPortfolio from "../../context/ContextPortfolio";
import TemplatePortfolio from '../../templates/Portfolio';
import Loading from '../../templates/Loading';

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {

  const router = useRouter();

  if(router.isFallback) {
    return <Loading />;
  }

  return (
    <ContextPortfolio.Provider value={{ data }}>
      <TemplatePortfolio />
    </ContextPortfolio.Provider>
  )
};


export const getStaticProps: GetStaticProps<unknown> = async () => {

  const allCardprojects = await loadDatoCMS(allCardprojectsQuery)
  const allCardprocesses = await loadDatoCMS(allCardprocessesQuery)
  const textsobre = await loadDatoCMS(textsobreQuery)
  const allCardskills = await loadDatoCMS(allCardskillsQuery)

  return {
    props: {
      data: {
        allCardprojects,
        allCardprocesses,
        textsobre,
        allCardskills
      },
    }
  }
}

export default Portfolio
