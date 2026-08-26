import { useEffect, useState } from 'react'
import { Alert, Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthStateContext.jsx'
import './AuthPage.css'

function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destination = location.state?.from ?? '/'

  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    setIsSubmitting(true)

    try {
      await login(formData)
      navigate(destination, { replace: true })
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box className="auth-page">
      <Paper className="auth-card" elevation={4}>
        <Typography className="auth-title" variant="h4">
          Login
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
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
              Login
            </Button>
          </Stack>
        </Box>
        <Box className="auth-actions">
          <Typography variant="body2">Need an account?</Typography>
          <Link component={RouterLink} to="/register" underline="hover">
            Register
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}

export default LoginPage
