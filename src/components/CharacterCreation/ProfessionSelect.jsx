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
import {ProfessionEnum} from "../../DataObjects/enums/ProfessionEnum.tsx";

function ProfessionSelect({
    selectedProfession,
    setSelectedProfession,
    stepForward,
    stepBackward,
}) {

    const professionService = new ProfessionService()
    const professions = [
        ProfessionEnum.Guardian,
        ProfessionEnum.Hunter,
        ProfessionEnum.Mystic,
        ProfessionEnum.Operative,
        ProfessionEnum.Savant,
        ProfessionEnum.Thaumaturge,
        ProfessionEnum.Warrior,
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
                            <TableRow>
                                <TableCell style={{ textAlign: 'right' }}><strong>Tech Ability</strong></TableCell>
                                <TableCell>{professionService.getTechAbility(selectedProfession) !== null ? professionService.getTechAbility(selectedProfession) : 'No Techniques'}</TableCell>
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
                    <Table spacing={2}>
                        <TableBody>
                            <TableRow variant="dense">
                                <TableCell>
                                    Please select a profession to see its details
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    )
                }
            </Box>
            <Grid className="button-group">
                <Button variant="contained" color="secondary" onClick={() => stepBackward()}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => stepForward()}
                        disabled={!selectedProfession}
                >Next</Button>
            </Grid>
        </Stack>
    )
}

export default ProfessionSelect