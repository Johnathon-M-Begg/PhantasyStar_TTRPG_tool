import { useMemo, useState } from 'react'
import { AuthContext } from './AuthStateContext'
import { withApiBase } from '../config/api'

const SESSION_STORAGE_KEY = 'ps_tool_session'
const LOGIN_PATH = '/v1/users/login'
const REGISTER_PATH = '/v1/users/register'

function readStorage(key, fallbackValue) {
  try {
    const rawValue = window.localStorage.getItem(key)
    return rawValue ? JSON.parse(rawValue) : fallbackValue
  } catch {
    return fallbackValue
  }
}

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function readErrorMessage(response, fallbackMessage) {
  return response
    .json()
    .then(payload => payload?.message || payload?.error || fallbackMessage)
    .catch(() => fallbackMessage)
}

function normalizeUser(payload, fallbackUsername) {
  return {
    username: payload?.user?.username ?? payload?.username ?? fallbackUsername,
    email: payload?.user?.email ?? payload?.email ?? '',
    token: payload?.token,
  }
}

async function postToAuthEndpoint(path, payload, fallbackMessage) {
  const response = await fetch(withApiBase(path), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const message = await readErrorMessage(response, fallbackMessage)
    throw new Error(message)
  }

  return response
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() =>
    readStorage(SESSION_STORAGE_KEY, null),
  )

  const register = async ({ username, email, password }) => {
    const response = await postToAuthEndpoint(
      REGISTER_PATH,
      { username: username.trim(), email: email.trim(), password },
      'Could not create account.',
    )
    const payload = await response.json().catch(() => ({}))
    return normalizeUser(payload, username.trim())
  }

  const login = async ({ username, password }) => {
    const response = await postToAuthEndpoint(
      LOGIN_PATH,
      { username: username.trim(), password },
      'Invalid username or password.',
    )
    const payload = await response.json().catch(() => ({}))
    const nextSession = normalizeUser(payload, username.trim())

    setCurrentUser(nextSession)
    writeStorage(SESSION_STORAGE_KEY, nextSession)

    return nextSession
  }

  const logout = () => {
    setCurrentUser(null)
    window.localStorage.removeItem(SESSION_STORAGE_KEY)
  }

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      register,
      login,
      logout,
    }),
    [currentUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
