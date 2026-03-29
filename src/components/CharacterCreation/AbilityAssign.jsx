import {
    Button,
    FormControl,
    Grid, Icon, IconButton,
    MenuItem,
    Select,
    Stack,
    Table,
    TableBody, TableCell, TableRow,
} from "@mui/material";
import {useState} from "react";
import {AddCircle, RemoveCircle} from "@mui/icons-material";

function AbilityAssign({
    abilityScores,
    setAbilityScore,
    setStep,
}) {



    const rules = [
        // "Assign Values",
        "Assign Points",
        // "Assign Rolls",
    ]
    const [currentRule, setCurrentRule] = useState(rules[0])


    const AbilityTable = () => {
        return(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Strength</TableCell>
                        <TableCell>{abilityScores.Strength}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dexterity</TableCell>
                        <TableCell>{abilityScores.Dexterity}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Constitution</TableCell>
                        <TableCell>{abilityScores.Constitution}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Intelligence</TableCell>
                        <TableCell>{abilityScores.Intelligence}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wisdom</TableCell>
                        <TableCell>{abilityScores.Wisdom}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Charisma</TableCell>
                        <TableCell>{abilityScores.Charisma}</TableCell>
                        <TableCell>
                            <IconButton color="primary">
                                <AddCircle/>
                            </IconButton>
                            <IconButton color="primary">
                                <RemoveCircle/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }

    const resetAbilityScores = () => {
        setAbilityScore.valueOf({
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0,
        })
    }

    return (
        <Stack direction="column">
            <p>{currentRule}</p>
            {/*<p>Select Rules</p>*/}
            {/*<FormControl variant="standard" size="small">*/}
            {/*    <Select*/}
            {/*        id={"rules-select"}*/}
            {/*        value={currentRule}*/}
            {/*        onChange={(e) => {*/}
            {/*            resetAbilityScores()*/}
            {/*            setCurrentRule(e.target.value)*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {rules.map((item, index) => (*/}
            {/*            <MenuItem key={index} value={item}>{item}</MenuItem>*/}
            {/*        ))}*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
            <Stack direction="row" spacing={2}>
                <AbilityTable />
            </Stack>
            <Grid className="button-group">
                <Button variant="contained" color="secondary"onClick={() => setStep(2)}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => setStep(4)}
                >Next</Button>
            </Grid>
        </Stack>
    )
}

export default AbilityAssign;