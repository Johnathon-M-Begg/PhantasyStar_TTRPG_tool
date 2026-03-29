import {ProfessionService} from "../../services/ProfessionService.tsx";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Table, TableBody,
    TableCell,
    TableRow,
} from "@mui/material";

function ProfessionSelect({
    selectedProfession,
    setSelectedProfession,
    setStep,
}) {

    const professionService = new ProfessionService()
    const professions = [
        'Guardian',
        'Hunter',
        'Mystic',
        'Operative',
        'Savant',
        'Thaumaturge',
        'Warrior'
    ]

    return (
        <Stack className="profession-select">
            <FormControl
                variant="standard"
                size="small"
            >
                <InputLabel htmlFor="profession-select">Select Profession:</InputLabel>
                <Select
                    id="profession-select"
                    value={selectedProfession}
                    onChange={(e) => setSelectedProfession(e.target.value)}
                >
                    <MenuItem value="">-- Choose a profession --</MenuItem>
                    {professions.map((profession) => (
                        <MenuItem key={profession} value={profession} title={profession}>
                            {profession}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box className="profession-info">
                {selectedProfession ? (
                    <Table spacing={2}>
                        <TableBody>
                            <TableRow variant="dense">
                                <TableCell style={{ width:'25%', textAlign: 'right'}}><strong>Hit Dice</strong></TableCell>
                                <TableCell style={{ width:'75%' }} > D{professionService.getHitDice(selectedProfession)}</TableCell>
                            </TableRow>
                            <TableRow variant="dense">
                                <TableCell style={{ textAlign: 'right' }}><strong>Primary Abilities:</strong></TableCell>
                                <TableCell>{professionService.getPrimaryAbilities(selectedProfession).map(ability => ability).join(', ')}</TableCell>
                            </TableRow>
                            <TableRow variant="dense">
                                <TableCell style={{ textAlign: 'right' }}><strong>Saves:</strong></TableCell>
                                <TableCell>{professionService.getSaveProficiencies(selectedProfession).map(ability => ability).join(', ')}</TableCell>
                            </TableRow>
                            <TableRow variant="dense">
                                <TableCell style={{ textAlign: 'right' }}><strong>Weapon Proficiencies:</strong></TableCell>
                                <TableCell>{professionService.getWeaponProficiencies(selectedProfession).map(weapon => weapon).join(', ')}</TableCell>
                            </TableRow>
                            <TableRow variant="dense">
                                <TableCell style={{ textAlign: 'right' }}><strong>Armor Proficiencies:</strong></TableCell>
                                <TableCell>{professionService.getArmorProficiencies(selectedProfession).length > 0 ? professionService.getArmorProficiencies(selectedProfession).map(armor => armor).join(', ') : 'None'}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                ) : (
                    <Box>
                        <p>Please select a profession to see its details.</p>
                    </Box>
                    )
                }
            </Box>
            <Grid className="button-group">
                <Button variant="contained" color="secondary"onClick={() => setStep(1)}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => setStep(3)}
                        disabled={!selectedProfession}
                >Next</Button>
            </Grid>
        </Stack>
    )
}

export default ProfessionSelect