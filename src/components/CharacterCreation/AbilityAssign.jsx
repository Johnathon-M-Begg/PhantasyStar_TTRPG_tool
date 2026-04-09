import {
    Button,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody, TableCell, TableRow,
} from "@mui/material";
import {useState} from "react";
import {AddCircle, RemoveCircle} from "@mui/icons-material";
import {AbilitiesEnum} from "../../DataObjects/enums/AbilitiesEnum.tsx";

function AbilityAssign({
    abilityScores,
    setAbilityScore,
    selectedOrigin,
    stepForward,
    stepBackward,
}) {
    const rules = [
        "Assign Points",
    ]
    const [currentRule, setCurrentRule] = useState(rules[0])
    const [abilityPoints, setAbilityPoints] = useState(7)



    const resetAbilityScores = () => {
        setAbilityPoints(7)
        setAbilityScore({
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0,
        })
    }

    const setStrength = (value) => {
        setAbilityScore({
            ...abilityScores,
            Strength: value
        })
    }
    const setDexterity = (value) => {
        setAbilityScore({
            ...abilityScores,
            Dexterity: value
        })
    }
    const setConstitution = (value) => {
        setAbilityScore({
            ...abilityScores,
            Constitution: value
        })
    }
    const setIntelligence = (value) => {
        setAbilityScore({
            ...abilityScores,
            Intelligence: value
        })
    }
    const setWisdom = (value) => {
        setAbilityScore({
            ...abilityScores,
            Wisdom: value
        })
    }
    const setCharisma = (value) => {
        setAbilityScore({
            ...abilityScores,
            Charisma: value
        })
    }



    const AbilityEntry = ({name, property, updateFunction}) => {
        let abilityMax = 3
        let abilityMin = -1

        if(
            name === 'Strength' &&
            selectedOrigin.variant.toLowerCase() === "High-gravity".toLowerCase()
        ){
            abilityMax = abilityMax + 1
        }

        return(
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{property}</TableCell>
                <TableCell>
                    <IconButton color="primary"
                                disabled={property <= abilityMin}
                                onClick={() => {
                                    updateFunction(property - 1)
                                    setAbilityPoints(abilityPoints + 1)
                                }}
                    >
                        <RemoveCircle/>
                    </IconButton>
                    <IconButton color="primary"
                        disabled={property >= abilityMax || abilityPoints <= 0}
                        onClick={() => {
                            updateFunction(property + 1)
                            setAbilityPoints(abilityPoints -1)
                        }}
                    >
                        <AddCircle/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    const AbilityTable = () => {
        return(
            <Table>
                <TableBody>
                    <AbilityEntry
                        name={AbilitiesEnum.Strength}
                        property={abilityScores.Strength}
                        updateFunction={setStrength}
                    />
                    <AbilityEntry
                        name={AbilitiesEnum.Dexterity}
                        property={abilityScores.Dexterity}
                        updateFunction={setDexterity}
                    />
                    <AbilityEntry
                        name={AbilitiesEnum.Constitution}
                        property={abilityScores.Constitution}
                        updateFunction={setConstitution}
                    />
                    <AbilityEntry
                        name={AbilitiesEnum.Wisdom}
                        property={abilityScores.Wisdom}
                        updateFunction={setWisdom}
                    />
                    <AbilityEntry
                        name={AbilitiesEnum.Intelligence}
                        property={abilityScores.Intelligence}
                        updateFunction={setIntelligence}
                    />
                    <AbilityEntry
                        name={AbilitiesEnum.Charisma}
                        property={abilityScores.Charisma}
                        updateFunction={setCharisma}
                    />
                </TableBody>
            </Table>
        )
    }



    return (
        <Stack direction="column">
            <p>{currentRule}</p>
            {abilityPoints}
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
                <Button variant="contained" color="secondary"
                        onClick={() => {
                            resetAbilityScores()
                            stepBackward()
                        }}
                >Back</Button>
                <Button variant="contained" color="primary" onClick={() => stepForward()}
                        disabled={abilityPoints !== 0}
                >Next</Button>

                <Button variant="contained" color={"complementary"}
                        onClick={() => resetAbilityScores()}>Reset</Button>
            </Grid>
        </Stack>
    )
}

export default AbilityAssign;