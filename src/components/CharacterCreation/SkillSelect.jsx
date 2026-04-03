import {ProfessionService} from "../../services/ProfessionService.tsx";
import {Stack} from "@mui/material";
import TrainedSkillSelect from "./SkillSelect/TrainedSkillSelect.jsx";
import SkillRankDetail from "./SkillSelect/SkillRankDetail.jsx";
import {useState} from "react";

function SkillSelect({
     selectedProfession,
     selectedOrigin,
     skillRanks,
     setSkillRanks,
     setStep,
}) {
    const [trainedSkills, setTrainedSkills] = useState([]);

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
                trainedSkills={trainedSkills}
                professionSkills={professionSkills}
                selectedOrigin={selectedOrigin}
            />
        </Stack>
    )

}
export default SkillSelect;