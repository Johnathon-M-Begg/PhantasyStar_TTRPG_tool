import {Box, Button, IconButton, Stack, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SkillEnum} from "../../../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../../../DataObjects/enums/AbilitiesEnum.tsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {useState} from "react";

function SkillRankPointBuy({
    abilityScores,
    skillRanks,
    setSkillRanks,
    freePoints,
    setFreePoints,
    setStage,
    setStep,
}) {
    const initialSpentPoints = {
        acrobatics: 0,
        astrophysics: 0,
        athletics: 0,
        computers: 0,
        deception: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        lore: 0,
        mechanics: 0,
        medicine: 0,
        performance: 0,
        perception: 0,
        persuasion: 0,
        slightOfHand: 0,
        stealth: 0,
        survival: 0,
        xenobiology: 0,
    };


    const [spentPoints, setSpentPoints] = useState(initialSpentPoints);

    const skillList = [
        {name: SkillEnum.acrobatics, attribute: AbilitiesEnum.Dexterity},
        {name: SkillEnum.astrophysics, attribute: AbilitiesEnum.Intelligence},
        {name: SkillEnum.athletics, attribute: AbilitiesEnum.Strength},
        {name: SkillEnum.computers, attribute: AbilitiesEnum.Intelligence},
        {name: SkillEnum.deception, attribute: AbilitiesEnum.Charisma},
        {name: SkillEnum.insight, attribute: AbilitiesEnum.Wisdom},
        {name: SkillEnum.intimidation, attribute: AbilitiesEnum.Charisma},
        {name: SkillEnum.investigation, attribute: AbilitiesEnum.Intelligence},
        {name: SkillEnum.lore, attribute: AbilitiesEnum.Intelligence},
        {name: SkillEnum.mechanics, attribute: AbilitiesEnum.Wisdom},
        {name: SkillEnum.medicine, attribute: AbilitiesEnum.Wisdom},
        {name: SkillEnum.perception, attribute: AbilitiesEnum.Wisdom},
        {name: SkillEnum.performance, attribute: AbilitiesEnum.Charisma},
        {name: SkillEnum.persuasion, attribute: AbilitiesEnum.Charisma},
        {name: SkillEnum.slightOfHand, attribute: AbilitiesEnum.Dexterity},
        {name: SkillEnum.stealth, attribute: AbilitiesEnum.Dexterity},
        {name: SkillEnum.survival, attribute: AbilitiesEnum.Wisdom},
        {name: SkillEnum.xenobiology, attribute: AbilitiesEnum.Intelligence},
    ]

    function handleAdd(skill) {
        let acrobatics = (skill === SkillEnum.acrobatics)? 1 : 0
        let astrophysics = (skill === SkillEnum.astrophysics)? 1 : 0
        let athletics = (skill === SkillEnum.athletics)? 1 : 0
        let computers = (skill === SkillEnum.computers)? 1 : 0
        let deception = (skill === SkillEnum.deception)? 1 : 0
        let insight = (skill === SkillEnum.insight)? 1 : 0
        let intimidation = (skill === SkillEnum.intimidation)? 1 : 0
        let investigation = (skill === SkillEnum.investigation)? 1 : 0
        let lore = (skill === SkillEnum.lore)? 1 : 0
        let mechanics = (skill === SkillEnum.mechanics)? 1 : 0
        let medicine = (skill === SkillEnum.medicine)? 1 : 0
        let performance = (skill === SkillEnum.performance)? 1 : 0
        let perception = (skill === SkillEnum.perception)? 1 : 0
        let persuasion = (skill === SkillEnum.persuasion)? 1 : 0
        let slightOfHand = (skill === SkillEnum.slightOfHand)? 1 : 0
        let stealth = (skill === SkillEnum.stealth)? 1 : 0
        let survival = (skill === SkillEnum.survival)? 1 : 0
        let xenobiology = (skill === SkillEnum.xenobiology)? 1 : 0

        setFreePoints(freePoints - 1);
        setSpentPoints({
            acrobatics: spentPoints.acrobatics + acrobatics,
            astrophysics: spentPoints.astrophysics + astrophysics,
            athletics: spentPoints.athletics + athletics,
            computers: spentPoints.computers + computers,
            deception: spentPoints.deception + deception,
            insight: spentPoints.insight + insight,
            intimidation: spentPoints.intimidation + intimidation,
            investigation: spentPoints.investigation + investigation,
            lore: spentPoints.lore + lore,
            mechanics: spentPoints.mechanics + mechanics,
            medicine: spentPoints.medicine + medicine,
            performance: spentPoints.performance + performance,
            perception: spentPoints.perception + perception,
            persuasion: spentPoints.persuasion + persuasion,
            slightOfHand: spentPoints.slightOfHand + slightOfHand,
            stealth: spentPoints.stealth + stealth,
            survival: spentPoints.survival + survival,
            xenobiology: spentPoints.xenobiology + xenobiology,
        })
    }

    function handleRemove(skill) {
        let acrobatics = (skill === SkillEnum.acrobatics)? -1 : 0
        let astrophysics = (skill === SkillEnum.astrophysics)? -1 : 0
        let athletics = (skill === SkillEnum.athletics)? -1 : 0
        let computers = (skill === SkillEnum.computers)? -1 : 0
        let deception = (skill === SkillEnum.deception)? -1 : 0
        let insight = (skill === SkillEnum.insight)? -1 : 0
        let intimidation = (skill === SkillEnum.intimidation)? -1 : 0
        let investigation = (skill === SkillEnum.investigation)? -1 : 0
        let lore = (skill === SkillEnum.lore)? -1 : 0
        let mechanics = (skill === SkillEnum.mechanics)? -1 : 0
        let medicine = (skill === SkillEnum.medicine)? -1 : 0
        let performance = (skill === SkillEnum.performance)? -1 : 0
        let perception = (skill === SkillEnum.perception)? -1 : 0
        let persuasion = (skill === SkillEnum.persuasion)? -1 : 0
        let slightOfHand = (skill === SkillEnum.slightOfHand)? -1 : 0
        let stealth = (skill === SkillEnum.stealth)? -1 : 0
        let survival = (skill === SkillEnum.survival)? -1 : 0
        let xenobiology = (skill === SkillEnum.xenobiology)? -1 : 0

        setFreePoints(freePoints + 1);
        setSpentPoints({
            acrobatics: spentPoints.acrobatics + acrobatics,
            astrophysics: spentPoints.astrophysics + astrophysics,
            athletics: spentPoints.athletics + athletics,
            computers: spentPoints.computers + computers,
            deception: spentPoints.deception + deception,
            insight: spentPoints.insight + insight,
            intimidation: spentPoints.intimidation + intimidation,
            investigation: spentPoints.investigation + investigation,
            lore: spentPoints.lore + lore,
            mechanics: spentPoints.mechanics + mechanics,
            medicine: spentPoints.medicine + medicine,
            performance: spentPoints.performance + performance,
            perception: spentPoints.perception + perception,
            persuasion: spentPoints.persuasion + persuasion,
            slightOfHand: spentPoints.slightOfHand + slightOfHand,
            stealth: spentPoints.stealth + stealth,
            survival: spentPoints.survival + survival,
            xenobiology: spentPoints.xenobiology + xenobiology,
        })
    }

    function apply(){
        setSkillRanks({
            acrobatics: skillRanks.acrobatics + spentPoints.acrobatics,
            astrophysics: skillRanks.astrophysics + spentPoints.astrophysics,
            athletics: skillRanks.athletics + spentPoints.athletics,
            computers: skillRanks.computers + spentPoints.computers,
            deception: skillRanks.deception + spentPoints.deception,
            insight: skillRanks.insight + spentPoints.insight,
            intimidation: skillRanks.intimidation + spentPoints.intimidation,
            investigation: skillRanks.investigation + spentPoints.investigation,
            lore: skillRanks.lore + spentPoints.lore,
            mechanics: skillRanks.mechanics + spentPoints.mechanics,
            medicine: skillRanks.medicine + spentPoints.medicine,
            performance: skillRanks.performance + spentPoints.performance,
            perception: skillRanks.perception + spentPoints.perception,
            persuasion: skillRanks.persuasion + spentPoints.persuasion,
            slightOfHand: skillRanks.slightOfHand + spentPoints.slightOfHand,
            stealth: skillRanks.stealth + spentPoints.stealth,
            survival: skillRanks.survival + spentPoints.survival,
            xenobiology: skillRanks.xenobiology + spentPoints.xenobiology,
        });
        setStep(5)
    }

    function addAbilityModifier({name, value}) {
        let attribute = skillList.find(s => s.name === name)?.attribute
        let total = value
        if (attribute === AbilitiesEnum.Dexterity) {
            total += abilityScores.Dexterity
        }
        if (attribute === AbilitiesEnum.Intelligence) {
            total += abilityScores.Intelligence
        }
        if (attribute === AbilitiesEnum.Charisma) {
            total += abilityScores.Charisma
        }
        if (attribute === AbilitiesEnum.Strength) {
            total += abilityScores.Strength
        }
        if (attribute === AbilitiesEnum.Wisdom) {
            total += abilityScores.Wisdom
        }
        return total
    }

    function SkillRow({name, value, points}) {
        let attribute = skillList.find(s => s.name === name)?.attribute
        let total = addAbilityModifier({name, value})
        let isAddDisabled = ((value > 2) || freePoints <= 0)
        let isRemoveDisabled = (points <= 0)
        return (
            <TableRow>
                <TableCell>
                    <strong>{name}</strong>
                </TableCell>
                <TableCell>{attribute.slice(0,3).toUpperCase()}</TableCell>
                <TableCell>{value + points}</TableCell>
                <TableCell>{total + points}</TableCell>
                <TableCell>
                    <IconButton size="small" disabled={isRemoveDisabled}>
                        <RemoveIcon
                            fontSize={"inherit"}
                            onClick={() => handleRemove(name)}
                        />
                    </IconButton>
                    <IconButton size="small" disabled={isAddDisabled}>
                        <AddIcon
                            fontSize={"inherit"}
                            onClick={() => handleAdd(name)}
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    function SkillDetailContainer() {
        return (
            <TableContainer>
                <Table className="skill-table" size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Skill</TableCell>
                            <TableCell>Ability</TableCell>
                            <TableCell>Ranks</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        <SkillRow name={SkillEnum.acrobatics} value={skillRanks.acrobatics} points={spentPoints.acrobatics} />
                        <SkillRow name={SkillEnum.astrophysics} value={skillRanks.astrophysics} points={spentPoints.astrophysics} />
                        <SkillRow name={SkillEnum.athletics} value={skillRanks.athletics} points={spentPoints.athletics} />
                        <SkillRow name={SkillEnum.computers} value={skillRanks.computers} points={spentPoints.computers} />
                        <SkillRow name={SkillEnum.deception} value={skillRanks.deception} points={spentPoints.deception} />
                        <SkillRow name={SkillEnum.insight} value={skillRanks.insight} points={spentPoints.insight} />
                        <SkillRow name={SkillEnum.intimidation} value={skillRanks.intimidation} points={spentPoints.intimidation} />
                        <SkillRow name={SkillEnum.investigation} value={skillRanks.investigation} points={spentPoints.investigation} />
                        <SkillRow name={SkillEnum.lore} value={skillRanks.lore} points={spentPoints.lore} />
                        <SkillRow name={SkillEnum.mechanics} value={skillRanks.mechanics} points={spentPoints.mechanics} />
                        <SkillRow name={SkillEnum.medicine} value={skillRanks.medicine} points={spentPoints.medicine} />
                        <SkillRow name={SkillEnum.perception} value={skillRanks.perception} points={spentPoints.perception} />
                        <SkillRow name={SkillEnum.performance} value={skillRanks.performance} points={spentPoints.performance} />
                        <SkillRow name={SkillEnum.persuasion} value={skillRanks.persuasion} points={spentPoints.persuasion} />
                        <SkillRow name={SkillEnum.slightOfHand} value={skillRanks.slightOfHand} points={spentPoints.slightOfHand} />
                        <SkillRow name={SkillEnum.stealth} value={skillRanks.stealth} points={spentPoints.stealth} />
                        <SkillRow name={SkillEnum.survival} value={skillRanks.survival} points={spentPoints.survival} />
                        <SkillRow name={SkillEnum.xenobiology} value={skillRanks.xenobiology} points={spentPoints.xenobiology} />
                    </tbody>
                </Table>
            </TableContainer>
        )
    }

    return (
        <Stack>
            {freePoints >0 &&(
                <p>Spend remaining points:
                    <strong> {freePoints}</strong>
                </p>
            )}
            <SkillDetailContainer/>
            <Stack direction={'row'} spacing={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {setStage(0)}}
                >Back</Button>
                <Button
                    variant="contained"
                    onClick={() => {apply()}}
                    disabled={freePoints >= 1}
                >Accept</Button>
            </Stack>
        </Stack>
    )
}

export default SkillRankPointBuy;