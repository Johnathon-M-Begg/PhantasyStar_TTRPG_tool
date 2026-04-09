import './CharacterSummary.css'
import {Box, Stack, Typography} from "@mui/material";
import SkillSummary from "./SkillSummary.jsx";

function CharacterSummary({
    profession,
    race,
    variant,
    background,
    abilityScores,
    skills,
    proficiencies,
}) {
    return (
        <Stack direction={"column"}>
            <Typography>Character Summary</Typography>
            <Stack direction={"row"} spacing={2}>
                <div>
                    LVL 1 {profession}
                </div>
                <div>
                    {race}
                </div>
                <div>
                    {variant}
                </div>
                <div>
                    {background}
                </div>
            </Stack>
            <Stack direction={"row"}>
                <SkillSummary skills={skills} abilityScores={abilityScores}/>
            </Stack>
        </Stack>
    )
}

export default CharacterSummary
