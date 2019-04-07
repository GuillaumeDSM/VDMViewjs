import axios from 'axios'
import { API_URL } from '@/util/constants'

export default  {
  getVDMs() {
    return axios.get(`${API_URL}/items`)
  },

  getVDM(vdmId) {
    return axios.get(`${API_URL}/item/${vdmId}`)
  },

  getRandomVDM() {
    return axios.get(`${API_URL}/item`)
  },

  addVDM(vdm) {
    return axios.post(`${API_URL}/item`, vdm)
  },

  upvoteVDM(vdmId) {
    return axios.post(`${API_URL}/item/${vdmId}/approve`)
  }
}