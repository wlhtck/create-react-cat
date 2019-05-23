import axios from 'axios'

export default async (req, res) => {
  try{
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    res.status(200).send(response.data)
  } catch(e) {
    res.status(500).send(e)
  }
}