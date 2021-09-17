type SendProps = {
  name?: string,
  telefone?: string,
  email: string,
  text?: string,
}

const SendEmail = async (data: SendProps): Promise<unknown> => {
  let res;

  console.log(data)

  await fetch('http://app-backend-send-email.herokuapp.com/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    console.log(response.ok)
    res = true
  }).catch(() => {
    res = false
  })

  return res;
}

export default SendEmail;
