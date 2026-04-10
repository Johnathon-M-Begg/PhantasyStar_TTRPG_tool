import {Table, TableBody, TableCell, TableRow} from "@mui/material";

function AbilitySummary({abilityScore}) {
    return(
        <Table size={"small"}>
            <TableBody>
                <TableRow>
                    <TableCell>Strength</TableCell>
                    <TableCell>{abilityScore.Strength}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Dexterity</TableCell>
                    <TableCell>{abilityScore.Dexterity}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Constitution</TableCell>
                    <TableCell>{abilityScore.Constitution}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Wisdom</TableCell>
                    <TableCell>{abilityScore.Wisdom}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Charisma</TableCell>
                    <TableCell>{abilityScore.Charisma}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Intelligence</TableCell>
                    <TableCell>{abilityScore.Intelligence}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default AbilitySummary;