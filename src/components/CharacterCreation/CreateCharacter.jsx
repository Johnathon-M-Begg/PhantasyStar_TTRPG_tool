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

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')
const rawCharacterSavePath = import.meta.env.VITE_CHARACTER_SAVE_PATH ?? '/v1/characters'
const CHARACTER_SAVE_PATH = rawCharacterSavePath.startsWith('/')
    ? rawCharacterSavePath
    : `/${rawCharacterSavePath}`

function readErrorMessage(response, fallbackMessage) {
    return response
        .json()
        .then(payload => payload?.message || payload?.error || fallbackMessage)
        .catch(() => fallbackMessage)
}

function CreateCharacter() {
    const [selectedProfession, setSelectedProfession] = useState(null)
    const [selectedOrigin, setSelectedOrigin] = useState({
        race: null,
        variant: VariantEnum.Default,
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
    const [skillRanks, setSkillRanks] = useState({
        acrobatics: 0,
        astrophysics: 0,
        athletics: 0,
        computers: 0,
        deception: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        lore: 0,
        mechanics: 0,
        medicine: 0,
        performance: 0,
        perception: 0,
        persuasion: 0,
        sleightOfHand: 0,
        stealth: 0,
        survival: 0,
        xenobiology: 0,
    })
    const [proficiency, setProficiency] = useState([])
    const [isSaving, setIsSaving] = useState(false)
    const [saveError, setSaveError] = useState('')
    const [saveSuccessMessage, setSaveSuccessMessage] = useState('')

    function stepForward () {
        setStep(step + 1)
    }

    function stepBackward() {
        setStep(step - 1)
    }

    async function saveCharacter() {
        setSaveError('')
        setSaveSuccessMessage('')
        setIsSaving(true)

        const payload = {
            profession: selectedProfession,
            origin: selectedOrigin,
            abilityScores,
            skillRanks,
            proficiencies: proficiency,
        }

        try {
            const response = await fetch(`${API_BASE_URL}${CHARACTER_SAVE_PATH}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const message = await readErrorMessage(response, 'Could not save character.')
                throw new Error(message)
            }

            setSaveSuccessMessage('Character saved successfully.')
        } catch (error) {
            setSaveError(error.message)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <Box className="container">
            <Box className="white-box">
                {step === 1 && (
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
                {step === 6 && (
                    <CharacterSummary
                        profession={selectedProfession}
                        race={selectedOrigin.race}
                        variant={selectedOrigin.variant}
                        background={selectedOrigin.background}
                        abilityScores={abilityScores}
                        skills={skillRanks}
                        proficiencies={proficiency}
                        onBack={stepBackward}
                        onConfirm={saveCharacter}
                        isSaving={isSaving}
                        saveError={saveError}
                        saveSuccessMessage={saveSuccessMessage}
                    />
                )}
            </Box>
        </Box>
    )
}

export default CreateCharacter
