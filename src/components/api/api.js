import * as axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a5cc9c81-feb6-4d6b-8ed1-6ac16bc3e083'
  }
})

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${ currentPage }&count=${ pageSize }`).then(response => response.data)
  },
  userID(userID) {
    return instance.get(`profile/` + userID)
  },
  auth() {
    return instance.get(`auth/me`).then(response => response.data)
  },
  notFollow(id) {
    return instance.delete(`follow/` + id).then(response => response.data)
  },
  follow(id) {
    return instance.post(`follow/` + id, {}).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logOut() {
    return instance.delete(`auth/login`)
  }
}