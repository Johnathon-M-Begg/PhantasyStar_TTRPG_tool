import {ProfessionService} from "../../../services/ProfessionService.tsx";
import {Stack} from "@mui/material";
import {BackgroundService} from "../../../services/BackgroundService.tsx";
import {SkillEnum} from "../../../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../../../DataObjects/enums/AbilitiesEnum.tsx";

function SkillRankDetail({
professionSkills,
selectedOrigin,
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
    const backgroundService = new BackgroundService()
    const backgroundSkills = backgroundService.getSkills(selectedOrigin.background)


    function SkillRow({skill}) {
        let value = 0
        if(backgroundSkills.includes(skill.name)) {
            value += 2
        }
        let isClassSkill = professionSkills.includes(skill.name)
        return (
            <tr>
                <td>{isClassSkill? (<>*</>) : (<></>)}</td>
                <td>
                    <strong>{skill.name}</strong>
                </td>
                <td>{skill.attribute.slice(0,3).toUpperCase()}</td>
                <td>{value}</td>
            </tr>
        )
    }

    function SkillDetailContainer() {
        return (
            <div className="skill-container">
                <table className="skill-table">
                    <thead>
                    <tr>
                        <td></td>
                        <td>Skill</td>
                        <td>Ability</td>
                        <td>Total</td>
                    </tr>
                    </thead>
                    <tbody>
                    {skillList.map(skill => (
                        <SkillRow key={skill.name}  skill={skill} />
                    ))}
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