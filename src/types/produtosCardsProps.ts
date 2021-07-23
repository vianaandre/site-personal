type ProdutosCardsProps = {
  data: {
    allCardprodutos: Array<{
      href: string,
      title: string,
      store: string,
      description: {
        value
      }
    }>
  }
}

export default ProdutosCardsProps;
