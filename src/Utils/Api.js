import axios from 'axios';

const BASE_URL = 'https://backend-travelmate.vercel.app/';

const fetchData = async (url, options = {}) => {
  try {
    const response = await axios({
      method: 'get',
      url: url,
      ...options
    });
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
};

const getUsers = () => fetchData(`${BASE_URL}users`);
const getPariwisata = () => fetchData(`${BASE_URL}pariwisata`);
const getArticles = () => fetchData(`${BASE_URL}articles`);
const registerUser = (userData) => postData(`${BASE_URL}auth/register`, userData);
const loginUser = (userData) => postData(`${BASE_URL}auth/login`, userData);

export { getUsers, getPariwisata, getArticles, registerUser, loginUser };
