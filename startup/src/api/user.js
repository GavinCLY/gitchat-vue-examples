import axios from 'axios'

export default {
  login ({ username, password }) {
    return axios({
      url: '',
      method: 'post',
      data: {
        username,
        name
      }
    })
  }
}