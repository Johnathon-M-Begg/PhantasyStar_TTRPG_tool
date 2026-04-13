import {Paper, Table, TableBody, TableCell, TableRow} from "@mui/material";
import {ProfessionEnum} from "../../DataObjects/enums/ProfessionEnum.tsx";
import {Favorite} from "@mui/icons-material";

function SecondaryAttributeSummary({profession, abilityScore}) {

    function GetHitPoints() {
        let hitDice = 0
        let hitPoints = 0
        if(
            profession === ProfessionEnum.Warrior ||
            profession === ProfessionEnum.Guardian ||
            profession === ProfessionEnum.Hunter
        ) {
            hitDice = 10
        } else if (
            profession === ProfessionEnum.Operative ||
            profession === ProfessionEnum.Mystic ||
            profession === ProfessionEnum.Savant
        ) {
            hitDice = 8
        } else {
            hitDice = 6
        }

        hitPoints = hitDice + abilityScore.Constitution

        return(
                    <TableRow>
                        <TableCell>
                            <Favorite fontSize={"small"}/> {hitPoints}
                        </TableCell>
                    </TableRow>
        )
    }

    return (
        <Paper>
            <Table size={"small"}>
                <TableBody>
                    <GetHitPoints/>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default SecondaryAttributeSummary