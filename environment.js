/* eslint-disable consistent-return */
import Constants from 'expo-constants';

const APP = 'orun';
const ENV = {
  dev: {
    ENTRY_POINT: `${localhost}/${APP}`,
  },
  prod: {
    // my.production.api.here
    ENTRY_POINT: `${'https://api.orun.io'}/${APP}`,
  },
};

const getEnvAPI = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) return ENV.dev;
  if (env === 'prod') return ENV.prod;
};

export default getEnvAPI;
