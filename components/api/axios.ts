import axios from "axios"

const instance = axios.create({
  baseURL: 'https://jiflex.vercel.app/api'
})

export default instance