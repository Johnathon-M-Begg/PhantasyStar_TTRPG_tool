import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCharacter.css'

function CreateCharacter() {
    const navigate = useNavigate()
    const [selectedRace, setSelectedRace] = useState('')

    const races = [
        'Human',
        'Newman',
        'Casts',
    ]

    return (
        <div className="container">
            <div className="white-box">
                <h2>Create New Character</h2>
                <div className="form-group">
                    <label htmlFor="race-select">Select Race:</label>
                    <select 
                        id="race-select" 
                        value={selectedRace}
                        onChange={(e) => setSelectedRace(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">-- Choose a race --</option>
                        {races.map((race) => (
                            <option key={race} value={race}>
                                {race}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="button-group">
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
                    <button className="btn btn-primary" disabled={!selectedRace}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCharacter
