import { useNavigate } from 'react-router-dom'
import './CharacterSummary.css'

function CharacterSummary({ profession, race, variant, onBack }) {
    const navigate = useNavigate()

    return (
        <>
            <h2>Character Summary</h2>
            <div className="summary-content">
                <p><strong>Profession:</strong> {profession || 'Not selected'}</p>
                <p><strong>Race:</strong> {race || 'Not selected'}</p>
                <p><strong>Variant:</strong> {variant || 'None'}</p>
            </div>
            <div className="button-group">
                <button className="btn btn-secondary" onClick={onBack}>Back</button>
                <button className="btn btn-primary" onClick={() => {/* TODO: Next step */}}>Continue</button>
            </div>
        </>
    )
}

export default CharacterSummary
