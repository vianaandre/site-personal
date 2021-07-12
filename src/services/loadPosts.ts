import axios from 'axios';

const loadPosts = async (url: string, slug?: string): Promise<[]> => {
  if (slug) {
    const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
    url = `${url}?slug=${cleanSlug}`
  }

  const response = await axios(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default loadPosts
