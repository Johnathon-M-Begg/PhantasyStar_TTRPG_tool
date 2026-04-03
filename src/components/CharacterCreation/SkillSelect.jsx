import {ProfessionService} from "../../services/ProfessionService.tsx";
import {Stack} from "@mui/material";
import TrainedSkillSelect from "./SkillSelect/TrainedSkillSelect.jsx";
import SkillRankDetail from "./SkillSelect/SkillRankDetail.jsx";
import {useState} from "react";
import {SkillEnum} from "../../DataObjects/enums/SkillEnum.tsx";

function SkillSelect({
     abilityScores,
     selectedProfession,
     selectedOrigin,
     skillRanks,
     setSkillRanks,
     setStep,
}) {
     const handleUpdate = (selections) => {
         setSkillRanks({
             acrobatics: (2 * selections.includes(SkillEnum.acrobatics)),
             astrophysics: (2 * selections.includes(SkillEnum.astrophysics)),
             athletics: (2 * selections.includes(SkillEnum.athletics)),
             computers: (2 * selections.includes(SkillEnum.computers)),
             deception: (2 * selections.includes(SkillEnum.deception)),
             insight: (2 * selections.includes(SkillEnum.insight)),
             intimidation: (2 * selections.includes(SkillEnum.intimidation)),
             investigation: (2 * selections.includes(SkillEnum.investigation)),
             lore: (2 * selections.includes(SkillEnum.lore)),
             mechanics: (2 * selections.includes(SkillEnum.mechanics)),
             medicine: (2 * selections.includes(SkillEnum.medicine)),
             performance: (2 * selections.includes(SkillEnum.performance)),
             perception: (2 * selections.includes(SkillEnum.perception)),
             persuasion: (2 * selections.includes(SkillEnum.persuasion)),
             slightOfHand: (2 * selections.includes(SkillEnum.slightOfHand)),
             stealth: (2 * selections.includes(SkillEnum.stealth)),
             survival: (2 * selections.includes(SkillEnum.survival)),
             xenobiology: (2 * selections.includes(SkillEnum.xenobiology)),
            })
    }

    const professionService = new ProfessionService()
    const professionSkills = professionService.getProfessionSkills(selectedProfession)
    const professionPoints= professionService.getSkillPoints(selectedProfession)

    return(
        <Stack direction={"row"}>
            <TrainedSkillSelect
                professionSkills={professionSkills}
                handleUpdate={handleUpdate}
                count={professionPoints}
            />
            <SkillRankDetail
                abilityScores={abilityScores}
                skillRanks={skillRanks}
            />
        </Stack>
    )

}
export default SkillSelect;