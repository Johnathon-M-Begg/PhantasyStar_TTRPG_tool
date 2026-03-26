import {Abilities} from "../../DataObjects/Abilities.tsx";
import {Skill} from "../../DataObjects/Skill.tsx";
import {ArmorTypes} from "../../DataObjects/ArmorTypes.tsx";
import {WeaponType} from "../../DataObjects/WeaponType.tsx";
import {ProfessionService} from "../../services/ProfessionService.tsx";

function ProfessionSelect({
    selectedProfession,
    setSelectedProfession,
    setStep,
}) {

    const professionService = new ProfessionService()
    const professions = [
        'Guardian',
        'Hunter',
        'Mystic',
        'Operative',
        'Savant',
        'Thaumaturge',
        'Warrior'
    ]
    const selectedItem = professions.find(item => item.name === selectedProfession)


    return (
        <div className="form-group">
            <label htmlFor="profession-select">Select Profession:</label>
            <select
                id="profession-select"
                value={selectedProfession}
                onChange={(e) => setSelectedProfession(e.target.value)}
                className="dropdown"
            >
                <option value="">-- Choose a profession --</option>
                {professions.map((profession) => (
                    <option key={profession} value={profession} title={profession}>
                        {profession}
                    </option>
                ))}
            </select>
            <div className="input-group">
                {selectedProfession ? (

                    <div className="profession-details">
                        {selectedProfession}
                        <p>{professionService.getHitDice(selectedProfession)}</p>
                        <p><strong>Hit Dice:</strong> D{professionService.getHitDice(selectedProfession)}</p>
                        <p><strong>Primary Abilities:</strong> {professionService.getPrimaryAbilities(selectedProfession).map(ability => ability).join(', ')}</p>
                        <p><strong>Saves:</strong> {professionService.getSaveProficiencies(selectedProfession).map(ability => ability).join(', ')}</p>
                        <p><strong>Skill Choices:</strong> {professionService.getSkillPoints(selectedProfession)} from {professionService.getProfessionSkills(selectedProfession).map(skill => skill).join(', ')}</p>
                        <p><strong>Weapon Proficiencies:</strong> {professionService.getWeaponProficiencies(selectedProfession).map(weapon => weapon).join(', ')}</p>
                        <p><strong>Armor Proficiencies:</strong> {professionService.getArmorProficiencies(selectedProfession).length > 0 ? professionService.getArmorProficiencies(selectedProfession).map(armor => armor).join(', ') : 'None'}</p>
                    </div>
                ) : (
                    <p>Please select a profession to see its details.</p>
                    )
                }
            </div>
            <div className="button-group">
                <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(3)}
                        disabled={!selectedProfession}
                >Next</button>
            </div>
        </div>
    )
}

export default ProfessionSelect