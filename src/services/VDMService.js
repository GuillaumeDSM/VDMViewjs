import axios from 'axios'
import { API_URL } from '@/util/constants'

export default  {
  getVDMs() {
    // TODO delete 15 when GET All VDMs is implemented
    return axios.get(`${API_URL}/item/15`)
  },

  getVDM(vdmId) {
    return axios.get(`${API_URL}/item/${vdmId}`)
  },

  addVDM(vdm) {
    return axios.post(`${API_URL}/item`, vdm)
  },

  upvoteVDM() {
    return axios.get(`${API_URL}/item/approve`)
  }
}