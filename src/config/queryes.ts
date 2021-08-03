export const allLinksQuery = `{
  allLinks {
    icon {
      url
      alt
    }
    title
    href
  }
}`;

export const allCardprojectsQuery = `{
  allCardprojects {
   image {
     url
     alt
   }
   description
   button {
     title
     href
   }
   icon {
     url
     alt
   }
 }
}`;

export const allCardprocessesQuery = `{
  allCardprocesses {
    image {
      url
      alt
    }
    text {
      value
    }
  }
}`;

export const textsobreQuery = `{
  textsobre {
    title
    text
  }
}`;

export const allCardskillsQuery = `{
  allCardskills {
    icon {
      url
      alt
    }
    title
    text
  }
}`;

export const allCardprodutosQuery = `{
  allCardprodutos {
    href
    title
    store
    description {
      value
    }
  }
}`;

export const allSlugQuery = `{
  allCardposts {
    slug
    title
  }
}`

export const allCardpostsQuery = `{
  allCardposts {
    descriptiontext
    title
    slug
    auto
    data
    description {
      value
    }
    tag {
      tag
    }
    thumbnail {
      url
      alt
    }
    content {
      title
      text {
        value
      }
      images {
        url
        alt
      }
    }
  }
}`
