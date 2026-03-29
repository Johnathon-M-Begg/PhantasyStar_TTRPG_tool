import { useState } from 'react'
import './CreateCharacter.css'
import OriginSelect from "./OriginSelect.jsx";
import ProfessionSelect from "./ProfessionSelect.jsx";
import SkillSelect from "./SkillSelect.jsx";
import {Box} from "@mui/material";
import AbilityAssign from "./AbilityAssign.jsx";

function CreateCharacter() {
    const [selectedProfession, setSelectedProfession] = useState('')
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: null,
        variant: null,
        background: null,
    })
    const [step, setStep] = useState(1)
    const [abilityScores, setAbilityScore] = useState({
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
    })

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
                    <AbilityAssign
                        abilityScores={abilityScores}
                        setAbilityScore={setAbilityScore}
                        setStep={setStep}
                    />
                )}
                {step === 4 && (
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
