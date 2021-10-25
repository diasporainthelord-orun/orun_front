import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function validToken() {
  const accessIssued = await AsyncStorage.getItem('accessIssued');
}
