import './CharacterSummary.css'
import {Box, Divider, Paper, Stack, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
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

    function PersonalDetails() {
        return (
            <Paper elevation={3} sx={{bgcolor: 'green.light'}}>
                <Table size={"small"}>
                    <TableBody>
                        <TableRow>
                            <TableCell>LVL 1 {profession}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{race} - {variant}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{background}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }

    return (
        <Stack direction={"column"} spacing={1}>
            <Typography>Character Summary</Typography>
            <Stack direction={"row"} spacing={3}>
                <Stack direction={"column"} spacing={2}>
                    <PersonalDetails/>
                    <AbilitySummary abilityScore={abilityScores}/>
                </Stack>
                <SkillSummary skills={skills} abilityScores={abilityScores}/>
            </Stack>
        </Stack>
    )
}

export default CharacterSummary
