import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="white-box">
                <button className="btn btn-primary" onClick={() => navigate('/create')}>CREATE NEW</button>
                <button className="btn btn-secondary">LOAD</button>
            </div>
        </div>
    )
}

export default LandingPage
