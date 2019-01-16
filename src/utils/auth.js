import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
const userNameKey = 'username'
const pageNumber = 'pageNumber'
const newsChannel = 'newsChannel'

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

export function setPageNumber (number) {
  Cookies.set(pageNumber, number)
}

export function getPageNumber () {
  return Cookies.get(pageNumber)
}

export function setNewsChannel (channel) {
  Cookies.set(newsChannel, channel)
}

export function getNewsChannel () {
  return Cookies.get(newsChannel)
}
