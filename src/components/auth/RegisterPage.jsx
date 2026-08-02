import { useEffect, useState } from 'react'
import { Alert, Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import './AuthPage.css'

function RegisterPage() {
  const { register, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destination = location.state?.from ?? '/'

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAccountCreated, setIsAccountCreated] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(destination, { replace: true })
    }
  }, [destination, isAuthenticated, navigate])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setErrorMessage('')

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      await register(formData)
      setIsAccountCreated(true)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isAccountCreated) {
    return (
      <Box className="auth-page">
        <Paper className="auth-card" elevation={4}>
          <Typography className="auth-title" variant="h4">
            Your account has been created
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate('/login', { replace: true })}
          >
            OK
          </Button>
        </Paper>
      </Box>
    )
  }

  return (
    <Box className="auth-page">
      <Paper className="auth-card" elevation={4}>
        <Typography className="auth-title" variant="h4">
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
              Register
            </Button>
          </Stack>
        </Box>
        <Box className="auth-actions">
          <Typography variant="body2">Already have an account?</Typography>
          <Link component={RouterLink} to="/login" underline="hover">
            Login
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}

export default RegisterPage

