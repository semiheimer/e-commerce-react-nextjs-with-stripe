import axios from 'axios';
const apiToken = process.env.NEXT_PUBLIC_FIRABASE_TOKEN;
const register_API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiToken}`;
const login_API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiToken}`;
const password_changeURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXRw24BKeEkxL9zJEQpbfeieVBI5S4yO4';

// Register user
const register = async (userData) => {
  const response = await axios.post(register_API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.idToken));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(login_API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.idToken));
  }

  return response.data.idToken;
};
const passwordChange = async (userData) => {
  const response = await axios.post(password_changeURL, userData);

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
  passwordChange,
};

export default authService;
