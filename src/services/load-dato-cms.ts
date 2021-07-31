const laodDatoCMS = async (query: string): Promise<[]> => {
  const response = await fetch(
    process.env.ULR_BASE,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`,
      },
      body: JSON.stringify({
        query: query
      }),
    })

  const data = await response.json()

  return data.data
}

export default laodDatoCMS;
