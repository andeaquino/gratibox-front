import axios from "axios";

const API_URL = "https://pro-gratibox.herokuapp.com";

const createHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const signIn = ({ body }) => axios.post(`${API_URL}/sign-in`, body);
const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);
const listPlan = ({ token }) =>
  axios.get(`${API_URL}/plan`, createHeaders(token));

export { signIn, signUp, listPlan };
