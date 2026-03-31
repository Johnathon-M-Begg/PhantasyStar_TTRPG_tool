import {Skill} from "../../DataObjects/Skill.tsx";
import {Abilities} from "../../DataObjects/Abilities.tsx";
import {BackgroundService} from "../../services/BackgroundService.tsx";
import {ProfessionService} from "../../services/ProfessionService.tsx";

function SkillSelect({
     selectedProfession,
     selectedOrigin,
     setStep,
}) {

    const maxSkillValue = 3
    let freeSkillPoints = 0

    const skillList = [
        {name: Skill.acrobatics, attribute: Abilities.Dexterity},
        {name: Skill.astrophysics, attribute: Abilities.Intelligence},
        {name: Skill.athletics, attribute: Abilities.Strength},
        {name: Skill.computers, attribute: Abilities.Intelligence},
        {name: Skill.deception, attribute: Abilities.Charisma},
        {name: Skill.insight, attribute: Abilities.Wisdom},
        {name: Skill.intimidation, attribute: Abilities.Charisma},
        {name: Skill.investigation, attribute: Abilities.Intelligence},
        {name: Skill.lore, attribute: Abilities.Intelligence},
        {name: Skill.mechanics, attribute: Abilities.Wisdom},
        {name: Skill.medicine, attribute: Abilities.Wisdom},
        {name: Skill.perception, attribute: Abilities.Wisdom},
        {name: Skill.performance, attribute: Abilities.Charisma},
        {name: Skill.persuasion, attribute: Abilities.Charisma},
        {name: Skill.slightOfHand, attribute: Abilities.Dexterity},
        {name: Skill.stealth, attribute: Abilities.Dexterity},
        {name: Skill.survival, attribute: Abilities.Wisdom},
        {name: Skill.xenobiology, attribute: Abilities.Intelligence},
    ]

    const professionService = new ProfessionService()
    const professionSkills = professionService.getProfessionSkills(selectedProfession)
    let professionPoints = professionService.getSkillPoints(selectedProfession)
    const backgroundService = new BackgroundService()
    const backgroundSkills = backgroundService.getSkills(selectedOrigin.background)

    function SkillRow({name, attribute}) {
        let value = 0
        if(backgroundSkills.includes(name)) {
            value += 2
        }
        let isClassSkill = professionSkills.includes(name)

        let allocatedPoints = 0
        return (
            <tr>
                <td>{isClassSkill? (<>*</>) : (<></>)}</td>
                <td>
                    <strong>{name}</strong>
                </td>
                <td>{attribute.slice(0,3).toUpperCase()}</td>
                <td>{value}</td>
                <td><button disabled={allocatedPoints < 1}>-</button></td>
                <td><button disabled={value >= maxSkillValue}>+</button></td>
                <td>{allocatedPoints}</td>
            </tr>
        )
    }

    return(
        <div className="skill-container">
            <div>class points {professionPoints}</div>
            <table className="skill-table">
                <tr>
                    <th></th>
                    <th>Skill</th>
                    <th>Ability</th>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th>Points</th>
                </tr>
                <tbody>
                {skillList.map(skill => (
                    <SkillRow name={skill.name} attribute={skill.attribute} />
                ))}
                </tbody>
            </table>
            <div className="button-group">
                <button className="btn btn-secondary" onClick={() => setStep(3)}>Back</button>
                <button className="btn btn-primary"  onClick={() => setStep(4)}
                disabled={true}
                >Next</button>
            </div>
        </div>
    )

}
export default SkillSelect;