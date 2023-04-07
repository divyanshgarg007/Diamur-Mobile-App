import AsyncStorage from '@react-native-async-storage/async-storage'
// export function getToken(key)
//  {
//   return JSON.parse(localStorage.getItem(key))
// }
export const getToken = async (key) => {
  let data = await AsyncStorage.getItem(key);
  return data
}
// export function setToken(key, value) {
//   return localStorage.setItem(key, JSON.stringify(value))
// }
export const setToken = async (key, value) => {

  return await AsyncStorage.setItem(key, value);

}
export function removeToken(key) {
  return localStorage.removeItem(key)
}

export function removeAllToken() {
  return localStorage.clear()
}