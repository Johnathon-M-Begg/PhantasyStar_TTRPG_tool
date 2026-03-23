import { useState } from 'react'
import './CreateCharacter.css'
import OriginSelect from "./OriginSelect.jsx";
import ProfessionSelect from "./ProfessionSelect.jsx";

function CreateCharacter() {
    const [selectedProfession, setSelectedProfession] = useState('')
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: null,
        variant: null,
        background: null,
        hasTechniques: true,
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
                            setStep={setStep}
                        />

                    </>
                )}
                {step === 2 && (
                    <ProfessionSelect
                    selectedProfession={selectedProfession}
                    setSelectedProfession={setSelectedProfession}
                    setStep={setStep}
                    />
                )}
            </div>
        </div>
    )
}

export default CreateCharacter
