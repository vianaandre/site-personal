import { GetStaticProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

import loadDatoCMS from '../../../services/load-dato-cms';
import { allCardprodutosQuery } from '../../../config/queryes';
import ProdutosCardsProps from '../../../types/produtosCardsProps';
import TemplatesProdutos from '../../../templates/Produtos';
import ContextProdutos from '../../../context/ContextProdutos';
import Loading from '../../../templates/Loading';

const Produtos: React.FC<ProdutosCardsProps> = ({ data }) => {

  const router = useRouter();

  if(router.isFallback) {
    return <Loading />
  }

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
