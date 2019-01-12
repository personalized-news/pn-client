import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
const userNameKey = 'username'
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getUserName () {
  return Cookies.get(userNameKey)
}

export function setUserName (username) {
  return Cookies.set(userNameKey, username)
}

export function removeUserName () {
  return Cookies.remove(userNameKey)
}
