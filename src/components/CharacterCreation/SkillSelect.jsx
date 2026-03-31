import {Skill} from "../../DataObjects/Skill.tsx";
import {Abilities} from "../../DataObjects/Abilities.tsx";
import {BackgroundService} from "../../services/BackgroundService.tsx";
import {ProfessionService} from "../../services/ProfessionService.tsx";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {useState} from "react";

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
    const professionPoints= professionService.getSkillPoints(selectedProfession)
    const backgroundService = new BackgroundService()
    const backgroundSkills = backgroundService.getSkills(selectedOrigin.background)

    const [checkedItems, setCheckedItems] = useState(0)

    function SkillRow({skill}) {
        let value = 0
        if(backgroundSkills.includes(skill.name)) {
            value += 2
        }
        let isClassSkill = professionSkills.includes(skill.name)
        let [isTrained, setIsTrained] = useState(false)
        const handleChange = (event) => {
            // Update the state with the new checked value
            setIsTrained(event.target.checked);
        };

        if(isTrained){
            value += 2
        }
        return (
            <tr>
                <td>{isClassSkill? (<>*</>) : (<></>)}</td>
                <td>
                    <strong>{skill.name}</strong>
                </td>
                <td>{skill.attribute.slice(0,3).toUpperCase()}</td>
                <td>{value}</td>
                <td>{isClassSkill? (
                    <Checkbox
                        checked={isTrained}
                        onChange={handleChange}
                    />
                ): (<></>)}</td>
            </tr>
        )
    }

    return(
        <div className="skill-container">
            <div>class points {professionPoints}</div>
            {checkedItems.length}
            <table className="skill-table">
                <thead>
                <tr>
                    <td></td>
                    <td>Skill</td>
                    <td>Ability</td>
                    <td>Total</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {skillList.map(skill => (
                    <SkillRow key={skill.name}  skill={skill} />
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