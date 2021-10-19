import axios from 'axios';
import getEnvAPI from '../../../environment';

const { ENTRY_POINT } = getEnvAPI();

export function verifyUser(accessToken) {
  return axios
    .post(`${ENTRY_POINT}/verify-user`, { accessToken });
}

export function getAccessToken(refreshToken) {
  return axios
    .post(`${ENTRY_POINT}/get-accessToken`, { refreshToken });
}
