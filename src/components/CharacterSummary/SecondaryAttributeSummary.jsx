import {Paper, Table, TableBody, TableCell, TableRow} from "@mui/material";
import {ProfessionEnum} from "../../DataObjects/enums/ProfessionEnum.tsx";
import {AbilitiesEnum} from "../../DataObjects/enums/AbilitiesEnum.tsx";
import {ProfessionService} from "../../services/ProfessionService.tsx";

function SecondaryAttributeSummary({profession, abilityScore}) {

    const professionService = new ProfessionService()

    const trainedSaves = professionService.getSaveProficiencies(profession);
    function GetHitPoints() {
        let hitDice = professionService.getHitDice(profession)
        let hitPoints = 0

        hitPoints = hitDice + abilityScore.Constitution

        return(
            <TableCell>
                HP {hitPoints}
            </TableCell>
        )
    }

    function GetTechPoints() {
        let techPoints = 0
        if (
             profession === ProfessionEnum.Mystic ||
             profession === ProfessionEnum.Savant ||
             profession === ProfessionEnum.Thaumaturge
        ) {
             techPoints = 8
        }
        return(
            <TableCell>
                TP {techPoints}
            </TableCell>
        )
    }

    function GetSave({ability, score}){
        let save = 0
        if(trainedSaves.includes(ability)){
            save += 2
        }
        save += score
        return(
            <TableCell>
                {ability.slice(0,3).toUpperCase()} {save}
            </TableCell>
        )
    }

    return (
        <Paper>
            <Table size={"small"}>
                <TableBody>
                    <TableRow>
                        <GetHitPoints/>
                        <GetTechPoints/>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan="2">
                            SAVES
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <GetSave ability={AbilitiesEnum.Strength} score={abilityScore.Strength}/>
                        <GetSave ability={AbilitiesEnum.Intelligence} score={abilityScore.Intelligence}/>
                    </TableRow>
                    <TableRow>
                        <GetSave ability={AbilitiesEnum.Constitution} score={abilityScore.Constitution}/>
                        <GetSave ability={AbilitiesEnum.Wisdom} score={abilityScore.Wisdom}/>
                    </TableRow>
                    <TableRow>
                        <GetSave ability={AbilitiesEnum.Dexterity} score={abilityScore.Dexterity}/>
                        <GetSave ability={AbilitiesEnum.Charisma} score={abilityScore.Charisma}/>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default SecondaryAttributeSummary