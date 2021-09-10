import styled from 'styled-components';

const StyledCardPosts = styled.div`
  a {
    .content {
      width: 305px;
      background-color: ${props => props.theme.colors.white};
      height: 390px;

      @media(max-width: 767px) {
        width: 300px;
      }

      padding: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(1.75)};
      box-shadow: 0 16px 36px rgb(0 0 0 / 15%);

      @media(max-width: 767px) {
        box-shadow:  0 16px 36px rgb(0 0 0 / 10%);
      }

      @media(max-width: 767px) {
        padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(1.5)};
      }

      &:hover {
        transform: scale(1.02);
        box-shadow: 0 16px 36px rgb(0 0 0 / 25%);
      };

      @media(max-width: 767px) {
        &:hover {
          transform: none;
          box-shadow:  0 16px 36px rgb(0 0 0 / 10%);
        }
      }

      .information {
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
          font-size: ${props => props.theme.spacing(3)};
          color: ${props => props.theme.colors.colorText};
          font-weight: 600;
          font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        }

        .text {
          font-size: ${props => props.theme.spacing(1.75)};
          color: ${props => props.theme.colors.colorText};
          opacity: 0.8;
          display: -webkit-box;
          -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`

export default StyledCardPosts;
