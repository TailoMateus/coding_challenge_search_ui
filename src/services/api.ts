import axios from "axios"

export const baseURL = 'http://localhost:3001/api/data'

const api = axios.create({
  baseURL
})

export default api