import axios from 'axios'

export default async (req, res) => {
  try{
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    res.status(200).send(response.data[0])
  } catch(e) {
    res.status(500).send(e)
  }
}