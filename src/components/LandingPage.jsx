import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import { Box, Button, Typography } from '@mui/material'
import { useAuth } from '../context/AuthStateContext.jsx'

function LandingPage() {
    const navigate = useNavigate()
    const { currentUser, isAuthenticated, logout } = useAuth()

    return (
        <Box className="container">
            <Box className="white-box">
                {isAuthenticated ? (
                    <>
                        <Typography variant="body2">Signed in as {currentUser.username}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/create')}
                        >
                            CREATE NEW
                        </Button>
                        <Button variant="contained" color="secondary">LOAD</Button>
                        <Button variant="outlined" onClick={logout}>LOGOUT</Button>
                    </>
                ) : (
                    <>
                        <Button variant="outlined" onClick={() => navigate('/login')}>LOGIN</Button>
                        <Button variant="outlined" onClick={() => navigate('/register')}>REGISTER</Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default LandingPage
