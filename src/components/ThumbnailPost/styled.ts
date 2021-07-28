import styled from 'styled-components';

const StyledThumbnailPost = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(9)};

  @media(max-width: 1024px) and (min-width: 768px) {
    padding-left: 40px;
  };

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(6)};
  }

  .thumbnail {

    padding-bottom: ${props => props.theme.spacing(2)};
    position: relative;
    width: 950px;
    display: flex;
    border-bottom: 1px solid;
    border-color: #E4E4E4;

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 768px;
    };

    @media(max-width: 767px) {
      width: 300px;
      flex-direction: column;
    }

    .back {
      position: absolute;
      z-index: 1000;
      top: -10px;
      left: -20px;

      a {
        padding: 12px 12px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
      }
      }

    .imgThumb {
      img {
        width: 450px;

        @media(max-width: 1024px) and (min-width: 768px) {
          width: 350px;
        };

        @media(max-width: 767px) {
          width: 300px;
        }
      }
    }

    .informationPost {

    margin-left: ${props => props.theme.spacing(2.5)};
    width: 450px;

    @media(max-width: 767px) {
      width: 300px;
      margin-left: 0;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;

      li {
        font-size: ${props => props.theme.spacing(1.75)};
        color: ${props => props.theme.colors.white};

        padding: 2px 5px;
        background-color: ${props => props.theme.colors.primary};
        margin-right: ${props => props.theme.spacing(1)};
        border-radius: 5px;
        border: solid 2px;
        border-color: ${props => props.theme.colors.primary};

        @media(max-width: 1024px) and (min-width: 768px) {
          margin-bottom: ${props => props.theme.spacing(1)};
        };

        @media(max-width: 767px) {
          margin-bottom: ${props => props.theme.spacing(1)};
          margin-top: ${props => props.theme.spacing(1)}
        }
      }
    }

    h1 {
      font-size: ${props => props.theme.spacing(4.5)};
      color: ${props => props.theme.colors.colorText};
      font-weight: bold;
      margin-top: ${props => props.theme.spacing(4)};

      @media(max-width: 1024px) and (min-width: 768px) {
        margin-top: ${props => props.theme.spacing(2)}
      };

      @media(max-width: 767px) {
        margin-top: ${props => props.theme.spacing(2)};
      }
    }

    .autorData {
      display: flex;
      align-items: center;
      margin-top: ${props => props.theme.spacing(2)};

      @media(max-width: 1024px) and (min-width: 768px) {
        margin-top: 0;
      }

      .divider {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.primary};
        margin: 0 10px;

      }
      span {
        font-size: ${props => props.theme.spacing(2.25)};
        font-weight: 400;
        color: ${props => props.theme.colors.colorText};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(1.75)}
        }
      }
    }
    }
  }

`

export default StyledThumbnailPost;
