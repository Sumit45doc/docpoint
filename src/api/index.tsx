import axios from 'axios';

const API = axios.create({ baseURL: 'https://main--stupendous-cannoli-bd8985.netlify.app' });

API.interceptors.request.use((req) => {
  if (localStorage && localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});


export type SignInInput = {
    email: string,
    password: string
}

export type SignUp = {
    username: string
} & SignInInput

export const signIn = (cred: SignInInput) => API.post('/user/signin', cred);
export const signUp = (cred: SignUp) => API.post('/user/signup', cred);
