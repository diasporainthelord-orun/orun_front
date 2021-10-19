import axios from 'axios';
import getEnvAPI from '../../../environment';

const { ENTRY_POINT } = getEnvAPI();

export function logIn(userInfo) {
  return axios
    .post(`${ENTRY_POINT}/login`, { userInfo });
}

export function verifyDuplicatedEmail(email) {
  return axios
    .post(`${ENTRY_POINT}/verify-email`, { email });
}

export function signUp(userInfo) {
  return axios
    .post(`${ENTRY_POINT}/signup`, { userInfo });
}
