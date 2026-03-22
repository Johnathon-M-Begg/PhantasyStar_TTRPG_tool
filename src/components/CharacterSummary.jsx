import { useLocation, useNavigate } from 'react-router-dom'
import './CharacterSummary.css'

function CharacterSummary() {
    const location = useLocation()
    const navigate = useNavigate()
    const { profession, race, variant } = location.state || {}

    return (
        <div className="container">
            <div className="white-box">
                <h2>Character Summary</h2>
                <div className="summary-content">
                    <p><strong>Profession:</strong> {profession || 'Not selected'}</p>
                    <p><strong>Race:</strong> {race || 'Not selected'}</p>
                    <p><strong>Variant:</strong> {variant || 'None'}</p>
                </div>
                <div className="button-group">
                    <button className="btn btn-secondary" onClick={() => navigate('/create')}>Back</button>
                    <button className="btn btn-primary" onClick={() => {/* TODO: Next step */}}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterSummary
