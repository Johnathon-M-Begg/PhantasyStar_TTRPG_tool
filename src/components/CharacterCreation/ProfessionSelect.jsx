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

    return (
        <div className="profession-select">
            <div>
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
            </div>
            <div className="profession-info">
                {selectedProfession ? (
                    <div className="profession-details">
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>HitDice:</strong></td>
                                    <td> D{professionService.getHitDice(selectedProfession)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Primary Abilities:</strong></td>
                                    <td>{professionService.getPrimaryAbilities(selectedProfession).map(ability => ability).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td><strong>Saves:</strong></td>
                                    <td>{professionService.getSaveProficiencies(selectedProfession).map(ability => ability).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td><strong>Weapon Proficiencies:</strong></td>
                                    <td>{professionService.getWeaponProficiencies(selectedProfession).map(weapon => weapon).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td><strong>Armor Proficiencies:</strong></td>
                                    <td>{professionService.getArmorProficiencies(selectedProfession).length > 0 ? professionService.getArmorProficiencies(selectedProfession).map(armor => armor).join(', ') : 'None'}</td>
                                </tr>
                            </tbody>
                        </table>
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