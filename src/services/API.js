import axios from "axios";

const API_URL = "https://pro-gratibox.herokuapp.com";

const signIn = ({ body }) => axios.post(`${API_URL}/sign-in`, body);
const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);

export { signIn, signUp };
