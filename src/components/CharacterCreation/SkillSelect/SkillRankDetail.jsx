import {Stack} from "@mui/material";
import {SkillEnum} from "../../../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../../../DataObjects/enums/AbilitiesEnum.tsx";

function SkillRankDetail({
    abilityScores,
    skillRanks,
}) {

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

    function SkillRow({name, value}) {
        let attribute = skillList.find(s => s.name === name)?.attribute
        let total = value
        if (attribute === AbilitiesEnum.Dexterity) {
            total += abilityScores.Dexterity
        }
        return (
            <tr>
                <td>
                    <strong>{name}</strong>
                </td>
                <td>{attribute.slice(0,3).toUpperCase()}</td>
                <td>{value}</td>
                <td>{total}</td>
            </tr>
        )
    }

    function SkillDetailContainer() {
        return (
            <div className="skill-container">
                <table className="skill-table">
                    <thead>
                    <tr>
                        <td>Skill</td>
                        <td>Ability</td>
                        <td>Ranks</td>
                        <td>Total</td>
                    </tr>
                    </thead>
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
                </table>

            </div>
        )
    }

    return (
        <Stack>
            <SkillDetailContainer />
        </Stack>
    )
}

export default SkillRankDetail;