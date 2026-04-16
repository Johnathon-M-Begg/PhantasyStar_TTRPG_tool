import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import {Box, Button} from "@mui/material";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <Box className="container">
            <Box className="white-box">
                <Button variant="contained" color="primary" onClick={() => navigate('/create')}>CREATE NEW</Button>
                <Button variant="contained" color="secondary">LOAD</Button>
            </Box>
        </Box>
    )
}

export default LandingPage
