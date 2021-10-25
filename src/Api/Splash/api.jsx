import axios from 'axios';
import getEnvAPI from '../../../environment';

const { ENTRY_POINT } = getEnvAPI();

export function verifyToken(token) {
  return axios
    .post(`${ENTRY_POINT}/verify-token`, { token });
}

export function getAccessToken(refreshToken) {
  return axios
    .post(`${ENTRY_POINT}/get-accessToken`, { refreshToken });
}
