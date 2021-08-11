import React from 'react';

import { CardsProdutosProps } from '../../types/types';
import StyledCardProdutos from './styled';
import datoStructureText from '../../utils/dato-structured-text';

const CardProdutos: React.FC<CardsProdutosProps> = ({ href, title, store, value }) => {

  const valueTransforme = datoStructureText(value)

  return (
      <StyledCardProdutos>
        <a href={href} target={'_blank'} rel="noreferrer">
          <div className="informationProduto">
          <h2>{title}</h2>
          <h4>{store}</h4>
          </div>
          <div className="textProduct">
            {valueTransforme}
          </div>
        </a>
      </StyledCardProdutos>
  )
}

export default CardProdutos;
