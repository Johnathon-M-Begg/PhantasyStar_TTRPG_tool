import {SkillEnum} from "../../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../../DataObjects/enums/AbilitiesEnum.tsx";
import {BackgroundService} from "../../services/BackgroundService.tsx";
import {ProfessionService} from "../../services/ProfessionService.tsx";
import {Stack} from "@mui/material";
import {useState} from "react";
import TrainedSkillSelect from "./SkillSelect/TrainedSkillSelect.jsx";
import SkillRankDetail from "./SkillSelect/SkillRankDetail.jsx";

function SkillSelect({
     selectedProfession,
     selectedOrigin,
     skillRanks,
     setSkillRanks,
     setStep,
}) {
    let [trainedSkills, setTrainedSkills] = useState([])

    const professionService = new ProfessionService()
    const professionSkills = professionService.getProfessionSkills(selectedProfession)
    const professionPoints= professionService.getSkillPoints(selectedProfession)

    return(
        <Stack direction={"row"}>
            <TrainedSkillSelect
                professionSkills={professionSkills}
                setTrainedSkills={setTrainedSkills}
                count={professionPoints}
            />
            <SkillRankDetail
                professionSkills={professionSkills}
                selectedOrigin={selectedOrigin}
            />
        </Stack>
    )

}
export default SkillSelect;