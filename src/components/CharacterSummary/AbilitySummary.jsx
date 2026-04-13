import { Paper, Table, TableBody, TableCell, TableRow} from "@mui/material";

function AbilitySummary({abilityScore}) {

    function Data() {
        return (
        <Table size={"small"}>
            <TableBody>
                <TableRow>
                    <TableCell>STR</TableCell>
                    <TableCell>{abilityScore.Strength}</TableCell>
                    <TableCell>DEX</TableCell>
                    <TableCell>{abilityScore.Dexterity}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>CON</TableCell>
                    <TableCell>{abilityScore.Constitution}</TableCell>
                    <TableCell>WIS</TableCell>
                    <TableCell>{abilityScore.Wisdom}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>CHA</TableCell>
                    <TableCell>{abilityScore.Charisma}</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>{abilityScore.Intelligence}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        )
    }

    function Entry () {
        return (
            <Paper elevation={3} sx={{bgcolor: 'orange.light'}}>
                <Data/>
            </Paper>
        )
    }

    return(
        <Entry/>
    )
}

export default AbilitySummary;