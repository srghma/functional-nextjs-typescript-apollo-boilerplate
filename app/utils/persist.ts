import * as cookies from 'js-cookie'

const ACCESS_TOKEN_KEY = 'accessToken'

export function willGetAccessToken() {
  return cookies.get(ACCESS_TOKEN_KEY)
}

export function willSetAccessToken(value: string) {
  return cookies.set(ACCESS_TOKEN_KEY, value)
}

export function willRemoveAccessToken() {
  return cookies.remove(ACCESS_TOKEN_KEY)
}
