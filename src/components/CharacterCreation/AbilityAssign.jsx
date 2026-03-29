import {
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Stack,
    Table,
    TableBody, TableCell,
} from "@mui/material";
import {useState} from "react";

function AbilityAssign({
    abilityScores,
    setAbilityScore,
    setStep,
}) {

    const rules = [
        "Method A: Assign Values",
        "Method B: Assign Points",
        "Method C: Assign Roles",
    ]
    const [currentRule, setCurrentRule] = useState(rules[0])


    const AbilityTable = () => {
        return(
            <Table>
                <TableBody>
                    <TableCell>Strength</TableCell>
                    <TableCell>{abilityScores.Strength}</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell>Dexterity</TableCell>
                    <TableCell>{abilityScores.Dexterity}</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell>Constitution</TableCell>
                    <TableCell>{abilityScores.Constitution}</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell>Intelligence</TableCell>
                    <TableCell>{abilityScores.Intelligence}</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell>Wisdom</TableCell>
                    <TableCell>{abilityScores.Wisdom}</TableCell>
                </TableBody>
                <TableBody>
                    <TableCell>Charisma</TableCell>
                    <TableCell>{abilityScores.Charisma}</TableCell>
                </TableBody>
            </Table>
        )
    }

    const resetAbilityScores = () => {
        console.log("resetAbilityScores")
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
            <p>Select Rules</p>
            <FormControl variant="standard" size="small">
                <Select
                    id={"rules-select"}
                    value={currentRule}
                    onChange={(e) => {
                        resetAbilityScores()
                        setCurrentRule(e.target.value)
                    }}
                >
                    {rules.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
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