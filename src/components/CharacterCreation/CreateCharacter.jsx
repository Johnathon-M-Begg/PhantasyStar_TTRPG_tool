import { useState } from 'react'
import './CreateCharacter.css'
import OriginSelect from "./OriginSelect.jsx";
import ProfessionSelect from "./ProfessionSelect.jsx";
import SkillSelect from "./SkillSelect.jsx";
import {Box} from "@mui/material";

function CreateCharacter() {
    const [selectedProfession, setSelectedProfession] = useState('')
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: null,
        variant: null,
        background: null,
    })
    const [step, setStep] = useState(1)

    return (
        <div className="container">
            <Box className="white-box">
                {step === 1 && (
                    <OriginSelect
                        selectedOrigin={selectedOrigin}
                        setSelectedOrigin={setSelectedOrigin}
                        setStep={setStep}
                    />
                )}
                {step === 2 && (
                    <ProfessionSelect
                    selectedProfession={selectedProfession}
                    setSelectedProfession={setSelectedProfession}
                    setStep={setStep}
                    />
                )}
                {step === 3 && (
                    <SkillSelect
                    selectedProfession={selectedProfession}
                    selectedOrigin={selectedOrigin}
                    setStep={setStep}
                    />
                )}
            </Box>
        </div>
    )
}

export default CreateCharacter
