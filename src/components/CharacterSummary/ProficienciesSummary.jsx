import {Paper, Table, TableCell, TableRow} from "@mui/material";

function ProficienciesSummary({proficiencies}) {

    function GetProficiencyRow(proficiency) {
        return(
            <TableRow>
                <TableCell>{proficiency}</TableCell>
            </TableRow>
        )
    }

    return(
        <Paper elevation={3}>
            <Table>
                {
                    proficiencies.map((it) => GetProficiencyRow(it))
                }
            </Table>
        </Paper>
    )
}
export default ProficienciesSummary;