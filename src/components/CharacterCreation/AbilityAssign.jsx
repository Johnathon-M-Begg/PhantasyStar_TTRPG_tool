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
import {Abilities} from "../../DataObjects/Abilities.tsx";

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
    const [skillPoints, setSkillPoints] = useState(10)


    const resetAbilityScores = () => {
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



    const Test = ({name, property, updateFunction}) => {
        return(
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{property}</TableCell>
                <TableCell>
                    <IconButton color="primary"
                        disabled={property >= 3 || skillPoints <= 0}
                        onClick={() => {
                            updateFunction(property + 1)
                            setSkillPoints(skillPoints -1)
                        }}
                    >
                        <AddCircle/>
                    </IconButton>
                    <IconButton color="primary"
                        disabled={property <= -1}
                        onClick={() => {
                            updateFunction(property - 1)
                            setSkillPoints(skillPoints + 1)
                        }}
                    >
                        <RemoveCircle/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    const AbilityTable = () => {
        return(
            <Table>
                <TableBody>
                    <Test
                        name={Abilities.Strength}
                        property={abilityScores.Strength}
                        updateFunction={setStrength}
                    />
                    <Test
                        name={Abilities.Dexterity}
                        property={abilityScores.Dexterity}
                        updateFunction={setDexterity}
                    />
                    <Test
                        name={Abilities.Constitution}
                        property={abilityScores.Constitution}
                        updateFunction={setConstitution}
                    />
                    <Test
                        name={Abilities.Wisdom}
                        property={abilityScores.Wisdom}
                        updateFunction={setWisdom}
                    />
                    <Test
                        name={Abilities.Intelligence}
                        property={abilityScores.Intelligence}
                        updateFunction={setIntelligence}
                    />
                    <Test
                        name={Abilities.Charisma}
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
            {skillPoints}
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