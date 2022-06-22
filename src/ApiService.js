import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/users";

class ApiService {
  // 전체 User 조회
  fetchUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  // ID로 User 조회
  fetchUserByID(userID) {
    return axios.get(USER_API_BASE_URL + "/" + userID);
  }

  // User 삭제
  deleteUser(userID) {
    return axios.delete(USER_API_BASE_URL + "/" + userID);
  }

  // User 추가
  addUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  // User 수정
  editUser(user) {
    return axios.put(USER_API_BASE_URL + "/" + user.id, user);
  }

  // User 로그인
  loginUser(user) {
    return axios.post(USER_API_BASE_URL + "/login", user);
  }
}

export default new ApiService();
