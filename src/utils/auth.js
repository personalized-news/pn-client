import Cookies from 'js-cookie'


export function getToken (TokenKey = 'User-Token') {
  return Cookies.get(TokenKey)
}

export function setToken (token, TokenKey = 'User-Token') {
  return Cookies.set(TokenKey, token)
}

export function removeToken (TokenKey = 'User-Token') {
  return Cookies.remove(TokenKey)
}
