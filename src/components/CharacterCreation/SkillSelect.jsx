import {Skill} from "../../DataObjects/Skill.tsx";
import {Abilities} from "../../DataObjects/Abilities.tsx";

function SkillSelect({
     selectedProfession,
     selectedOrigin,
     setStep,
}) {

    const max = 3
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

    function SkillRow({name, attribute}) {
        return (
            <tr>
                <td>
                    <strong>{name}</strong>
                </td>
                <td>{attribute.slice(0,3).toUpperCase()}</td>
                <td>value</td>
            </tr>
        )
    }

    return(
        <div className="skill-container">
            <table className="skill-table">
                <tbody>
                {skillList.map(skill => (
                    <SkillRow name={skill.name} attribute={skill.attribute} />
                ))}
                </tbody>
            </table>
            <div className="button-group">
                <button className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
                <button className="btn btn-primary"  onClick={() => setStep(4)}
                disabled={true}
                >Next</button>
            </div>
        </div>
    )

}
export default SkillSelect;