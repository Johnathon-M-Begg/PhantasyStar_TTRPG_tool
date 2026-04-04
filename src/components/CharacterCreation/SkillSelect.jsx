import {ProfessionService} from "../../services/ProfessionService.tsx";
import {Stack} from "@mui/material";
import TrainedSkillSelect from "./SkillSelect/TrainedSkillSelect.jsx";
import SkillRankDetail from "./SkillSelect/SkillRankDetail.jsx";
import {useState} from "react";
import {SkillEnum} from "../../DataObjects/enums/SkillEnum.tsx";
import {BackgroundService} from "../../services/BackgroundService.tsx";
import {VariantEnum} from "../../DataObjects/enums/VariantEnum.tsx";
import {RaceEnum} from "../../DataObjects/enums/RaceEnum.tsx";


function SkillSelect({
     abilityScores,
     selectedProfession,
     selectedOrigin,
     skillRanks,
     setSkillRanks,
     setStep,
}) {
    const [freePoints, setFreePoints] = useState(0)

    const CalculateSkill = (skill, selections, backgroundSkills) => {
        let skillRanks = 0
        let SkillMax = 3

        if(skill === SkillEnum.perception){
            if (
                selectedOrigin.race === RaceEnum.Motavian
                || selectedOrigin.race === RaceEnum.Dezolian
                || selectedOrigin.race === RaceEnum.Newman
            ){
                skillRanks += 1
            }
        }

        if(skill === SkillEnum.insight && selectedOrigin.race === RaceEnum.Dezolian){
            skillRanks += 1
        }

        if(skill === SkillEnum.survival && selectedOrigin.race === RaceEnum.Motavian){
            skillRanks += 2
        }

        if (selections.includes(skill)) {
            skillRanks = skillRanks + 2
        }
        if(backgroundSkills.includes(skill)){
            skillRanks = skillRanks + 2
        }
        if(skillRanks > SkillMax) {
            return SkillMax;
        }
        return skillRanks;
    }

    const calculateFreePoints = (trainedSkills, backgroundSkills) => {
        let freePoints = 0
        if(selectedOrigin.race === RaceEnum.Human){
            freePoints += 1
        }
        if(selectedOrigin.variant === VariantEnum.Subterranean){
            freePoints += 1
        }
        trainedSkills.forEach(skill => {
            if(backgroundSkills.includes(skill)){
                freePoints += 1
            }
        })
        return freePoints
    }

    const handleUpdate = (selections) => {
        const backgroundService = new BackgroundService()
        let backgroundSkills = backgroundService.getSkills(selectedOrigin.background)
        setSkillRanks({
            acrobatics: CalculateSkill(SkillEnum.acrobatics, selections, backgroundSkills),
            astrophysics: CalculateSkill(SkillEnum.astrophysics, selections,backgroundSkills),
            athletics: CalculateSkill(SkillEnum.athletics, selections, backgroundSkills),
            computers: CalculateSkill(SkillEnum.computers, selections, backgroundSkills),
            deception: CalculateSkill(SkillEnum.deception, selections, backgroundSkills),
            insight: CalculateSkill(SkillEnum.insight, selections, backgroundSkills),
            intimidation: CalculateSkill(SkillEnum.intimidation, selections, backgroundSkills),
            investigation: CalculateSkill(SkillEnum.investigation, selections, backgroundSkills),
            lore: CalculateSkill(SkillEnum.lore, selections, backgroundSkills),
            mechanics: CalculateSkill(SkillEnum.mechanics, selections, backgroundSkills),
            medicine: CalculateSkill(SkillEnum.medicine, selections, backgroundSkills),
            perception: CalculateSkill(SkillEnum.perception, selections, backgroundSkills,),
            performance: CalculateSkill(SkillEnum.performance, selections, backgroundSkills),
            persuasion: CalculateSkill(SkillEnum.persuasion, selections, backgroundSkills),
            slightOfHand: CalculateSkill(SkillEnum.slightOfHand, selections, backgroundSkills),
            stealth: CalculateSkill(SkillEnum.stealth, selections, backgroundSkills ),
            survival: CalculateSkill(SkillEnum.survival, selections, backgroundSkills),
            xenobiology: CalculateSkill(SkillEnum.xenobiology, selections, backgroundSkills),
        })
        setFreePoints(calculateFreePoints(selections, backgroundSkills))
    }

    const professionService = new ProfessionService()
    const professionSkills = professionService.getProfessionSkills(selectedProfession)
    const professionPoints= professionService.getSkillPoints(selectedProfession)


    return(
        <Stack direction={"row"}>
            {freePoints}
            <TrainedSkillSelect
                professionSkills={professionSkills}
                handleUpdate={handleUpdate}
                count={professionPoints}
                race={selectedOrigin.race}
            />
            <SkillRankDetail
                abilityScores={abilityScores}
                skillRanks={skillRanks}
            />
        </Stack>
    )

}
export default SkillSelect;