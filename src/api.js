import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000' // ✅ CORRECT BACKEND URL
});

export default API;
