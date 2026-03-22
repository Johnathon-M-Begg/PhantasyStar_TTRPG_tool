import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCharacter.css'
import ProfessionAndRaceSelect from "./ProfessionAndRaceSelect.jsx";
import CharacterSummary from "./CharacterSummary.jsx";

function CreateCharacter() {
    const navigate = useNavigate()
    const [selectedRace, setSelectedRace] = useState('')
    const [selectedVariant, setSelectedVariant] = useState('')
    const [selectedProfession, setSelectedProfession] = useState('')
    const [step, setStep] = useState(1)

    return (
        <div className="container">
            <div className="white-box">
                {step === 1 && (
                    <>
                        <ProfessionAndRaceSelect
                            selectedProfession={selectedProfession}
                            setSelectedProfession={setSelectedProfession}
                            selectedRace={selectedRace}
                            setSelectedRace={setSelectedRace}
                            selectedVariant={selectedVariant}
                            setSelectedVariant={setSelectedVariant}
                        />
                        <div className="button-group">
                            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
                            <button className="btn btn-primary" onClick={() => setStep(2)} disabled={!selectedRace || !selectedProfession}>Next</button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <CharacterSummary
                        profession={selectedProfession}
                        race={selectedRace}
                        variant={selectedVariant}
                        onBack={() => setStep(1)}
                    />
                )}
            </div>
        </div>
    )
}

export default CreateCharacter
