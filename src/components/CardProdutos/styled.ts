import styled from 'styled-components';

const StyledCardProdutos = styled.li`
  a {
    width: 305px;
    height: 220px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0 10px 36px rgb(0 0 0 / 15%);

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 36px rgb(0 0 0 / 25%);
    }

    .informationProduto {
      h2 {
      font-size: ${props => props.theme.spacing(2.25)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;
      }

      h4 {
        font-size: ${props => props.theme.spacing(1.75)};
        color: ${props => props.theme.colors.colorText};
        opacity: 0.5;
      }
      }

    p {
      font-size: ${props => props.theme.spacing(2)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 500;
      display: -webkit-box;
      -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }


`

export default StyledCardProdutos;
