import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "483a3673-bb18-4ca0-ba5f-65bfc3900391",
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

  getProfileContainer(userId) {
    console.warn("object method. Please ProfileAPI object.");
    return ProfileAPI.getProfile(userId);
  },
};
export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then(RE);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId).then(RE);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then(RE);
  },
};
export const authAPI = {
  Me() {
    return instance.get(`auth/me`).then(RE);
  },
};
