import { Paper, Table, TableBody, TableCell, TableRow} from "@mui/material";

function AbilitySummary({abilityScore}) {

    function Data() {
        return (
        <Table size={"small"}>
            <TableBody>
                <TableRow>
                    <TableCell>STR</TableCell>
                    <TableCell>{abilityScore.Strength}</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>{abilityScore.Intelligence}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>CON</TableCell>
                    <TableCell>{abilityScore.Constitution}</TableCell>
                    <TableCell>WIS</TableCell>
                    <TableCell>{abilityScore.Wisdom}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>DEX</TableCell>
                    <TableCell>{abilityScore.Dexterity}</TableCell>
                    <TableCell>CHA</TableCell>
                    <TableCell>{abilityScore.Charisma}</TableCell>

                </TableRow>
            </TableBody>
        </Table>
        )
    }

    function Entry () {
        return (
            <Paper elevation={3} sx={{bgcolor: 'orange.light'}}>
                Ability Scores
                <Data/>
            </Paper>
        )
    }

    return(
        <Entry/>
    )
}

export default AbilitySummary;