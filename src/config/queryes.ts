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
    text
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
    faviconpage {
      url
      alt
    }
  }
}`

export const allCardpostsQuery = `{
  allCardposts {
    title
    slug
    faviconpage {
      url
      alt
    }
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
