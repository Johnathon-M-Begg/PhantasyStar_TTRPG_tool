import { useState } from 'react'
import './CreateCharacter.css'
import OriginSelect from "./OriginSelect.jsx";
import ProfessionSelect from "./ProfessionSelect.jsx";
import SkillSelect from "./SkillSelect.jsx";
import {Box} from "@mui/material";
import AbilityAssign from "./AbilityAssign.jsx";
import {VariantEnum} from "../../DataObjects/enums/VariantEnum.tsx";
import ProficiencySelect from "./ProficiencySelect.jsx";
import CharacterSummary from "../CharacterSummary/CharacterSummary.jsx";
import {RaceEnum} from "../../DataObjects/enums/RaceEnum.tsx";
import {BackgroundEnum} from "../../DataObjects/enums/BackgroundEnum.tsx";
import {ProfessionEnum} from "../../DataObjects/enums/ProfessionEnum.tsx";

function CreateCharacter() {
    const [selectedProfession, setSelectedProfession] = useState(ProfessionEnum.Guardian)
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: RaceEnum.Human,
        variant: VariantEnum.Default,
        background: BackgroundEnum.Wayfarer,
    })
    const [step, setStep] = useState(1)
    const [abilityScores, setAbilityScore] = useState({
        Strength: 3,
        Dexterity: -1,
        Constitution: 2,
        Intelligence: 0,
        Wisdom: 2,
        Charisma: 1,
    })
    const [skillRanks, setSkillRanks] = useState({
        acrobatics: 0,
        astrophysics: 0,
        athletics: 2,
        computers: 0,
        deception: 0,
        insight: 3,
        intimidation: 0,
        investigation: 0,
        lore: 0,
        mechanics: 0,
        medicine: 0,
        performance: 0,
        perception: 3,
        persuasion: 3,
        sleightOfHand: 0,
        stealth: 0,
        survival: 0,
        xenobiology: 0,
    })
    const [proficiency, setProficiency] = useState([])

    function stepForward () {
        setStep(step + 1)
    }

    function stepBackward() {
        setStep(step - 1)
    }

    return (
        <Box className="container">
            <Box className="white-box">
                {step === 0 && (
                    <OriginSelect
                        selectedOrigin={selectedOrigin}
                        setSelectedOrigin={setSelectedOrigin}
                        stepForward={stepForward}
                        stepBackward={stepBackward}
                    />
                )}
                {step === 2 && (
                    <ProfessionSelect
                    selectedProfession={selectedProfession}
                    setSelectedProfession={setSelectedProfession}
                    stepForward={stepForward}
                    stepBackward={stepBackward}
                    />
                )}
                {step === 3 && (
                    <AbilityAssign
                        abilityScores={abilityScores}
                        setAbilityScore={setAbilityScore}
                        selectedOrigin={selectedOrigin}
                        stepForward={stepForward}
                        stepBackward={stepBackward}
                    />
                )}
                {step === 4 && (
                    <SkillSelect
                        abilityScores={abilityScores}
                        selectedProfession={selectedProfession}
                        selectedOrigin={selectedOrigin}
                        skillRanks={skillRanks}
                        setSkillRanks={setSkillRanks}
                        stepForward={stepForward}
                        stepBackward={stepBackward}
                    />
                )}
                {step === 5 && (
                    <ProficiencySelect
                        selectedOrigin={selectedOrigin}
                        selectedProfession={selectedProfession}
                        setProficiency={setProficiency}
                        stepForward={stepForward}
                        stepBackward={stepBackward}
                    />
                )}
                {step === 1 && (
                    <CharacterSummary
                        profession={selectedProfession}
                        race={selectedOrigin.race}
                        variant={selectedOrigin.variant}
                        background={selectedOrigin.background}
                        abilityScores={abilityScores}
                        skills={skillRanks}
                        proficiencies={proficiency}
                    />
                )}
            </Box>
        </Box>
    )
}

export default CreateCharacter
