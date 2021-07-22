type LinkProps = {
  data: {
    allLinks: [{
      href: string,
      icon: {
        url: string,
        alt: string,
      }
      title: string,
    }]
  }
}

export default LinkProps;
