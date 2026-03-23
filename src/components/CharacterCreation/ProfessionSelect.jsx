import {Abilities} from "../../DataObjects/Abilities.tsx";
import {Skill} from "../../DataObjects/Skill.tsx";
import {ArmorTypes} from "../../DataObjects/ArmorTypes.tsx";
import {WeaponType} from "../../DataObjects/WeaponType.tsx";

function ProfessionSelect({
    selectedProfession,
    setSelectedProfession,
    setStep,
}) {


    const professions = [
        {
            name: "Guardian",
            description: "Versatile combatant and defender",
            hitDice: 10,
            primaryAbilities: [Abilities.Strength, Abilities.Charisma],
            primaryAbilityChoice: [],
            saves: [Abilities.Wisdom, Abilities.Charisma],
            skillCount: 2,
            classSkills: [
                Skill.athletics,
                Skill.insight,
                Skill.intimidation,
                Skill.mechanics,
                Skill.medicine,
                Skill.perception,
                Skill.persuasion,
            ],
            weaponProficiencies: [
                WeaponType.axe,
                WeaponType.claw,
                WeaponType.dagger,
                WeaponType.pistol,
                WeaponType.rod,
                WeaponType.slasher,
                WeaponType.sword,
            ],
            armorProficiencies: [
                ArmorTypes.light,
                ArmorTypes.medium,
                ArmorTypes.heavy,
                ArmorTypes.shield,
            ]
        },
        {
            name: "Hunter",
            description: "Combines weapon skills with technique use",
            hitDice: 10,
            primaryAbilities: [Abilities.Wisdom],
            primaryAbilityChoice: [Abilities.Strength, Abilities.Dexterity],
            saves: [Abilities.Strength, Abilities.Dexterity],
            skillCount: 2,
            classSkills: [
                Skill.acrobatics,
                Skill.athletics,
                Skill.insight,
                Skill.investigation,
                Skill.perception,
                Skill.stealth,
                Skill.survival,
                Skill.xenobiology,
            ],
            weaponProficiencies: [
                WeaponType.axe,
                WeaponType.bow,
                WeaponType.claw,
                WeaponType.dagger,
                WeaponType.pistol,
                WeaponType.rifle,
                WeaponType.slasher,
                WeaponType.sword,
            ],
            armorProficiencies: [
                ArmorTypes.light,
                ArmorTypes.medium,
                ArmorTypes.shield,
            ],
        },
        {
            name: "Mystic",
            description: "Combat adept with spiritual techniques",
            hitDice: 8,
            primaryAbilities: [Abilities.Dexterity, Abilities.Wisdom],
            primaryAbilityChoice: [],
            saves: [Abilities.Strength, Abilities.Dexterity],
            skillCount: 2,
            classSkills: [
                Skill.acrobatics,
                Skill.athletics,
                Skill.insight,
                Skill.lore,
                Skill.performance,
                Skill.stealth,
                Skill.survival,
            ],
            weaponProficiencies: [
                WeaponType.claw,
                WeaponType.dagger,
                WeaponType.rod,
                WeaponType.slasher,
            ],
            armorProficiencies: [
                ArmorTypes.light,
            ],
        },
        {
            name: "Operative",
            description: "Expert in infiltration and exploration",
            hitDice: 8,
            primaryAbilities: [Abilities.Dexterity],
            primaryAbilityChoice: [],
            saves: [Abilities.Intelligence, Abilities.Dexterity],
            skillCount: 4,
            classSkills: [
                Skill.acrobatics,
                Skill.computers,
                Skill.deception,
                Skill.insight,
                Skill.intimidation,
                Skill.investigation,
                Skill.perception,
                Skill.persuasion,
                Skill.slightOfHand,
                Skill.stealth,
            ],
            weaponProficiencies: [
                WeaponType.bow,
                WeaponType.dagger,
                WeaponType.pistol,
                WeaponType.rod,
                WeaponType.slasher,
                WeaponType.sword,
            ],
            armorProficiencies: [
                ArmorTypes.light,
                ArmorTypes.shield,
            ],
        },
        {
            name: "Savant",
            description: "Specialist in biotech or machines",
            hitDice: 8,
            primaryAbilities: [Abilities.Wisdom],
            primaryAbilityChoice: [],
            saves: [Abilities.Wisdom, Abilities.Charisma],
            skillCount: 2,
            classSkills: [
                Skill.astrophysics,
                Skill.computers,
                Skill.insight,
                Skill.lore,
                Skill.mechanics,
                Skill.medicine,
                Skill.persuasion,
                Skill.xenobiology,
            ],
            weaponProficiencies: [
                WeaponType.bow,
                WeaponType.claw,
                WeaponType.dagger,
                WeaponType.pistol,
                WeaponType.rod,
            ],
            armorProficiencies: [
                ArmorTypes.light,
                ArmorTypes.medium,
                ArmorTypes.shield,
            ],
        },
        {
            name: "Thaumaturge",
            description: "Channelers of arcane power and elemental energy",
            hitDice: 6,
            primaryAbilities: [Abilities.Intelligence],
            primaryAbilityChoice: [],
            saves: [Abilities.Intelligence, Abilities.Wisdom],
            skillCount: 2,
            classSkills: [
                Skill.astrophysics,
                Skill.insight,
                Skill.investigation,
                Skill.lore,
                Skill.medicine,
                Skill.perception,
                Skill.xenobiology,
            ],
            weaponProficiencies: [
                WeaponType.dagger,
                WeaponType.rod,
                WeaponType.slasher,
            ],
            armorProficiencies: [
            ],
        },
        {
            name: "Warrior",
            description: "Master of arms and armor",
            hitDice: 10,
            primaryAbilities: [],
            primaryAbilityChoice: [Abilities.Strength, Abilities.Dexterity],
            saves: [Abilities.Strength, Abilities.Constitution],
            skillCount: 2,
            classSkills: [
                Skill.acrobatics,
                Skill.athletics,
                Skill.insight,
                Skill.intimidation,
                Skill.lore,
                Skill.perception,
                Skill.persuasion,
                Skill.survival,
            ],
            weaponProficiencies: [
                WeaponType.axe,
                WeaponType.bow,
                WeaponType.claw,
                WeaponType.dagger,
                WeaponType.pistol,
                WeaponType.rod,
                WeaponType.rifle,
                WeaponType.slasher,
                WeaponType.sword,
            ],
            armorProficiencies: [
                ArmorTypes.light,
                ArmorTypes.medium,
                ArmorTypes.heavy,
                ArmorTypes.shield,
            ],
        },
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
                    <option key={profession.name} value={profession.name} title={profession.desc}>
                        {profession.name}
                    </option>
                ))}
            </select>
            <div className="input-group">
                {selectedProfession ? (
                    <div className="profession-details">
                        <p>{selectedItem.description}</p>
                        <p><strong>Hit Dice:</strong> D{selectedItem.hitDice}</p>
                        <p><strong>Primary Abilities:</strong> {selectedItem.primaryAbilities.map(ability => ability).join(', ')}{selectedItem.primaryAbilityChoice.length > 0 ? ` (Choose one: ${selectedItem.primaryAbilityChoice.map(ability => ability).join(', ')})` : ''}</p>
                        <p><strong>Saves:</strong> {selectedItem.saves.map(ability => ability).join(', ')}</p>
                        <p><strong>Skill Choices:</strong> {selectedItem.skillCount} from {selectedItem.classSkills.map(skill => skill).join(', ')}</p>
                        <p><strong>Weapon Proficiencies:</strong> {selectedItem.weaponProficiencies.map(weapon => weapon).join(', ')}</p>
                        <p><strong>Armor Proficiencies:</strong> {selectedItem.armorProficiencies.length > 0 ? selectedItem.armorProficiencies.map(armor => armor).join(', ') : 'None'}</p>
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