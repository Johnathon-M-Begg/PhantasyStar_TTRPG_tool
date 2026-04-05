import {Button, IconButton, Stack, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
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
}) {
    const [spentPoints, setSpentPoints] = useState([]);
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

    function handleAdd(name) {
        console.log(name)
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

    function SkillRow({name, value}) {
        let attribute = skillList.find(s => s.name === name)?.attribute
        let total = addAbilityModifier({name, value})
        // let spentPointCount = getSpentPoints(name, spentPoints)
        let isAddDisabled = ((value >= 3) || freePoints <= 0)
        let isRemoveDisabled = true
        return (
            <TableRow>
                <TableCell>
                    <strong>{name}</strong>
                </TableCell>
                <TableCell>{attribute.slice(0,3).toUpperCase()}</TableCell>
                <TableCell>{value}</TableCell>
                <TableCell>{total}</TableCell>
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
                        <SkillRow name={SkillEnum.acrobatics} value={skillRanks.acrobatics} />
                        <SkillRow name={SkillEnum.astrophysics} value={skillRanks.astrophysics} />
                        <SkillRow name={SkillEnum.athletics} value={skillRanks.athletics} />
                        <SkillRow name={SkillEnum.computers} value={skillRanks.computers} />
                        <SkillRow name={SkillEnum.deception} value={skillRanks.deception} />
                        <SkillRow name={SkillEnum.insight} value={skillRanks.insight} />
                        <SkillRow name={SkillEnum.intimidation} value={skillRanks.intimidation} />
                        <SkillRow name={SkillEnum.investigation} value={skillRanks.investigation} />
                        <SkillRow name={SkillEnum.lore} value={skillRanks.lore} />
                        <SkillRow name={SkillEnum.mechanics} value={skillRanks.mechanics} />
                        <SkillRow name={SkillEnum.medicine} value={skillRanks.medicine} />
                        <SkillRow name={SkillEnum.perception} value={skillRanks.perception} />
                        <SkillRow name={SkillEnum.performance} value={skillRanks.performance} />
                        <SkillRow name={SkillEnum.persuasion} value={skillRanks.persuasion} />
                        <SkillRow name={SkillEnum.slightOfHand} value={skillRanks.slightOfHand} />
                        <SkillRow name={SkillEnum.stealth} value={skillRanks.stealth} />
                        <SkillRow name={SkillEnum.survival} value={skillRanks.survival} />
                        <SkillRow name={SkillEnum.xenobiology} value={skillRanks.xenobiology} />
                    </tbody>
                </Table>
            </TableContainer>
        )
    }

    function handleApply() {
        setSkillRanks({
            acrobatics: skillList.acrobatics + getSpentPoints(SkillEnum.acrobatics),
            astrophysics: skillList.astrophysics + getSpentPoints(SkillEnum.astrophysics),
            athletics: skillList.athletics + getSpentPoints(SkillEnum.athletics),
            computers: skillList.computers + getSpentPoints(SkillEnum.computers),
            deception: skillList.deception + getSpentPoints(SkillEnum.deception),
            insight: skillList.insight + getSpentPoints(SkillEnum.insight),
            intimidation: skillList.intimidation + getSpentPoints(SkillEnum.intimidation),
            investigation: skillList.investigation + getSpentPoints(SkillEnum.investigation),
            lore: skillList.lore + getSpentPoints(SkillEnum.lore),
            mechanics: skillList.mechanics + getSpentPoints(SkillEnum.mechanics),
            medicine: skillList.medicine + getSpentPoints(SkillEnum.medicine),
            performance: skillList.performance + getSpentPoints(SkillEnum.performance),
            perception: skillList.perception + getSpentPoints(SkillEnum.perception),
            persuasion: skillList.persuasion + getSpentPoints(SkillEnum.persuasion),
            slightOfHand: skillList.slightOfHand + getSpentPoints(SkillEnum.slightOfHand),
            stealth: skillList.stealth + getSpentPoints(SkillEnum.stealth),
            survival: skillList.survival + getSpentPoints(SkillEnum.survival),
            xenobiology: skillList.xenobiology + getSpentPoints(SkillEnum.xenobiology),
        })
    }

    return (
        <Stack>
            {freePoints >0 &&(
                <p>Spend remaining points:
                    <strong> {freePoints}</strong>
                </p>
            )}
            <SkillDetailContainer/>
            <Button
                variant={"contained"}
                onClick={() => {handleApply()}}
            >Accept</Button>
        </Stack>
    )
}

export default SkillRankPointBuy;