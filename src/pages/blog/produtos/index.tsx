import { GetStaticProps } from 'next';
import React from 'react';

import loadDatoCMS from '../../../services/load-dato-cms';
import { allCardprodutosQuery } from '../../../config/queryes';
import ProdutosCardsProps from '../../../types/produtosCardsProps';
import TemplatesProdutos from '../../../templates/Produtos';
import ContextProdutos from '../../../context/ContextProdutos';

const Produtos: React.FC<ProdutosCardsProps> = ({ data }) => {

  return (
    <ContextProdutos.Provider value={{ data }}>
      <TemplatesProdutos />
    </ContextProdutos.Provider>
  )
}


export const getStaticProps: GetStaticProps<unknown> = async () => {

  const data = await loadDatoCMS(allCardprodutosQuery)

  return {
    props: {
      data,
    }
  }
}

export default Produtos;
