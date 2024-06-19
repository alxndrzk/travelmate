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

const putData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Put error:', error);
    throw error;
  }
};

const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
};

// User API calls
const getUsers = () => fetchData(`${BASE_URL}users`);
const getUserById = (id) => fetchData(`${BASE_URL}users/${id}`);
const createUser = (userData) => postData(`${BASE_URL}users`, userData);
const updateUser = (id, userData) => putData(`${BASE_URL}users/${id}`, userData);
const deleteUser = (id) => deleteData(`${BASE_URL}users/${id}`);

// Pariwisata API calls
const getPariwisata = () => fetchData(`${BASE_URL}pariwisata`);
const getPariwisataById = (id) => fetchData(`${BASE_URL}pariwisata/${id}`);
const createPariwisata = (pariwisataData) => postData(`${BASE_URL}pariwisata`, pariwisataData);
const updatePariwisata = (id, pariwisataData) => putData(`${BASE_URL}pariwisata/${id}`, pariwisataData);
const deletePariwisata = (id) => deleteData(`${BASE_URL}pariwisata/${id}`);

// Articles API calls
const getArticles = () => fetchData(`${BASE_URL}articles`);
const getArticleById = (id) => fetchData(`${BASE_URL}articles/${id}`);
const createArticle = (articleData) => postData(`${BASE_URL}articles`, articleData);
const updateArticle = (id, articleData) => putData(`${BASE_URL}articles/${id}`, articleData);
const deleteArticle = (id) => deleteData(`${BASE_URL}articles/${id}`);

// Authentication API calls
const registerUser = (userData) => postData(`${BASE_URL}auth/register`, userData);
const loginUser = (userData) => postData(`${BASE_URL}auth/login`, userData);

export { 
  getUsers, getUserById, createUser, updateUser, deleteUser,
  getPariwisata, getPariwisataById, createPariwisata, updatePariwisata, deletePariwisata,
  getArticles, getArticleById, createArticle, updateArticle, deleteArticle,
  registerUser, loginUser 
};
