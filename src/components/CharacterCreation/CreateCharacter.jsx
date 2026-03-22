import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCharacter.css'
import OriginSelect from "./OriginSelect.jsx";
import ProfessionSelect from "./ProfessionSelect.jsx";

function CreateCharacter() {
    const navigate = useNavigate()
    const [selectedRace, setSelectedRace] = useState('')
    const [selectedVariant, setSelectedVariant] = useState('')
    const [selectedBackground, setSelectedBackground] = useState('')
    const [selectedProfession, setSelectedProfession] = useState('')
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: null,
        variant: null,
        background: null,
    })
    const [step, setStep] = useState(1)

    return (
        <div className="container">
            <div className="white-box">
                {step === 1 && (
                    <>
                        <OriginSelect
                            selectedOrigin={selectedOrigin}
                            setSelectedOrigin={setSelectedOrigin}
                        />
                        <div className="button-group">
                            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
                            <button className="btn btn-primary" onClick={() => setStep(2)} disabled={!selectedRace || !selectedProfession}>Next</button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <ProfessionSelect
                    selectedProfession={selectedProfession}
                    />
                )}
            </div>
        </div>
    )
}

export default CreateCharacter
