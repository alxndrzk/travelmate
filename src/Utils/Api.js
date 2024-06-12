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

const getUsers = () => fetchData(`${BASE_URL}users`);
const getPariwisata = () => fetchData(`${BASE_URL}pariwisata`);
const getArticles = () => fetchData(`${BASE_URL}articles`);

export { getUsers, getPariwisata, getArticles };
