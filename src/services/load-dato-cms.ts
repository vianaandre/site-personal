const token = '15502c9dfb080316154ea35e637a0a'
const ULR_BASE = 'https://graphql.datocms.com/'

const laodDatoCMS = async (query: string): Promise<[]> => {
  const response = await fetch(
    ULR_BASE,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: query
      }),
    })

  const data = await response.json()

  return data.data
}

export default laodDatoCMS;
