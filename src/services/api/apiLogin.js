import axios from 'axios';

const url ="http://192.168.1.68:3000/api/login";

const loginApi = async (userData) => {
  try {
    const response = await axios.post(url, userData);
    if (response.data.status === 200) {
      // Xử lý khi đăng nhập thành công
      console.log(response.data.message);
      console.log(response.data.data);
      return response.data.message;
    } else {
      // Xử lý khi đăng nhập thất bại
      console.log(response.data.message);
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export default loginApi;
