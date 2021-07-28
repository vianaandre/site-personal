import styled from 'styled-components';

const StyledTemplatePost = styled.div`
  .contentPost {

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .share {
      width: 100%;
      padding-left: 160px;

      @media(max-width: 1279px) and (min-width: 1025px) {
        padding-left: 52px;
      };

      @media(max-width: 1024px) and (min-width: 768px) {
        padding-left: 30px;
      }

      @media(max-width: 767px) {
        padding-left: 0;
        margin-top: ${props => props.theme.spacing(-2)};
      }
    }
  }


`

export default StyledTemplatePost;
