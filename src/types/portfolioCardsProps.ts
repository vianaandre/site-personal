type PortfolioProps = {
  data: {
    allCardprojects: {
      allCardprojects: [
        {
          image: {
            url: string,
            atl: string,
          }
          description: string,
          button: {
            href: string,
            title: string,
          }
          icon: {
            url: string,
            alt: string,
          }
        }]
    },
    allCardprocesses: {
      allCardprocesses: [
        {
          image: {
            url: string,
            alt: string,
          },
          text: string
        }]
    },
    textsobre: {
      textsobre: {
        title: string,
        text: string,
      }
    }
    allCardskills: {
      allCardskills: [
        {
          icon: {
            url: string,
            alt: string,
          }
          title: string,
          text: string,
        }]
    }
  }
}

export default PortfolioProps;
