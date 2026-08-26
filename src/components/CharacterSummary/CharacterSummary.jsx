import './CharacterSummary.css'
import { Alert, Button, Paper, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import SkillSummary from "./SkillSummary.jsx";
import AbilitySummary from "./AbilitySummary.jsx";
import SecondaryAttributeSummary from "./SecondaryAttributeSummary.jsx";
import ProficienciesSummary from "./ProficienciesSummary.jsx";

function PersonalDetails({ profession, race, variant, background }) {
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

function CharacterSummary({
    profession,
    race,
    variant,
    background,
    abilityScores,
    skills,
    proficiencies,
    onBack,
    onConfirm,
    isSaving,
    saveError,
    saveSuccessMessage,
}) {

    return (
        <Stack direction={'column'} spacing={2} className="summary-root">
            <Typography variant="h5">Character Summary</Typography>
            <Typography variant="body2">
                Please verify all character details below before saving.
            </Typography>
            {saveError ? <Alert severity="error">{saveError}</Alert> : null}
            {saveSuccessMessage ? <Alert severity="success">{saveSuccessMessage}</Alert> : null}
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} className="summary-content">
                <Stack direction={'column'} spacing={2} className="summary-left-column">
                    <PersonalDetails
                        profession={profession}
                        race={race}
                        variant={variant}
                        background={background}
                    />
                    <AbilitySummary abilityScore={abilityScores}/>
                    <SecondaryAttributeSummary profession={profession} abilityScore={abilityScores}/>
                    <ProficienciesSummary proficiencies={proficiencies}/>
                </Stack>
                <Stack className="summary-right-column">
                    <SkillSummary skills={skills} abilityScores={abilityScores}/>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={2} className="summary-actions">
                <Button variant="outlined" onClick={onBack} disabled={isSaving}>
                    Back
                </Button>
                <Button variant="contained" onClick={onConfirm} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'OK'}
                </Button>
            </Stack>
        </Stack>
    )
}

export default CharacterSummary
