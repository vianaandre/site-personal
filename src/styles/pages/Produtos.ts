import styled from 'styled-components';


const StyledProdutos = styled.div`
  .secaoProdutos {
    margin-top: ${props => props.theme.spacing(8)};
    @media (max-width: 767px) {
        margin-top: ${props => props.theme.spacing(6)};
      }
    .produtos {

      display: flex;
      flex-wrap: wrap;
      gap: 20px;

    }
  }

`

export default StyledProdutos;
