import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bbcae390-71f4-4304-9887-80227c60a28d",
  },
});

const RE = (response) => {
  return response.data;
};

export const UserAPI = {
  getUsersContainer(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(RE);
  },
  followUser(u) {
    return instance.post(`follow/${u}`).then(RE);
  },
  UnFollowUser(u) {
    return instance.delete(`follow/${u}`).then(RE);
  },
  Login() {
    return instance.get(`auth/me`).then(RE);
  },
  getProfileContainer(userId) {
    return instance.get(`profile/` + userId).then(RE);
  },
};
