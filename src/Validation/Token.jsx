import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function validToken() {
  const isValidAccess = await AsyncStorage.getItem('ACCESS_TOKEN');
  const isValidRefresh = await AsyncStorage.getItem('REFRESH_TOKEN');
}
