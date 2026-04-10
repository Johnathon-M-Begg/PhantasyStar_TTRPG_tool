import './CharacterSummary.css'
import {Box, Stack, Typography} from "@mui/material";
import SkillSummary from "./SkillSummary.jsx";
import AbilitySummary from "./AbilitySummary.jsx";

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
            <Box>
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
            </Box>

            <Stack direction={"row"}>
                <Box>
                    <AbilitySummary abilityScore={abilityScores}/>
                </Box>
                <SkillSummary skills={skills} abilityScores={abilityScores}/>
            </Stack>
        </Stack>
    )
}

export default CharacterSummary
