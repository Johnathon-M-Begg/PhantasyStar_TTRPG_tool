import type {Profession} from "../DataObjects/Profession.tsx";
import {WeaponType} from "../DataObjects/WeaponType.tsx";
import {Skill} from "../DataObjects/Skill.tsx";
import {Abilities} from "../DataObjects/Abilities.tsx";
import {ArmorTypes} from "../DataObjects/ArmorTypes.tsx";

export class ProfessionService {

    professions: Profession[] = [
        {
            name: "Guardian",
            description: "Versatile combatant and defender",
            hitDice: 10,
            skillCount: 2,
            primaryAbilities: [Abilities.Strength, Abilities.Charisma],
            classSkills: [
                Skill.athletics,
                Skill.insight,
                Skill.intimidation,
                Skill.mechanics,
                Skill.medicine,
                Skill.perception,
                Skill.persuasion,
            ],
            saves: [Abilities.Wisdom, Abilities.Charisma],
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
            skillCount: 2,
            primaryAbilities: [Abilities.Wisdom, Abilities.Strength, Abilities.Dexterity],
            saves: [Abilities.Strength, Abilities.Dexterity],
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
            skillCount: 2,
            primaryAbilities: [Abilities.Dexterity, Abilities.Wisdom],
            saves: [Abilities.Strength, Abilities.Dexterity],
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
            skillCount: 4,
            primaryAbilities: [Abilities.Dexterity],
            saves: [Abilities.Intelligence, Abilities.Dexterity],
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
            skillCount: 2,
            primaryAbilities: [Abilities.Wisdom],
            saves: [Abilities.Wisdom, Abilities.Charisma],
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
            skillCount: 2,
            primaryAbilities: [Abilities.Intelligence],
            saves: [Abilities.Intelligence, Abilities.Wisdom],
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
            skillCount: 2,
            primaryAbilities: [Abilities.Strength, Abilities.Dexterity],
            saves: [Abilities.Strength, Abilities.Constitution],
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

    getMatch(name: string): Profession | undefined {
        return this.professions.find(profession => profession.name === name)
    }

    getDescription(name: string): string | undefined {
        return this.getMatch(name)?.description
    }
s
    getProfessionSkills(name: string): Skill[]  {
        return this.getMatch(name)?.classSkills ?? []
    }

    getSkillPoints(name: string): number  {
        return this.getMatch(name)?.skillCount ?? 0
    }

    getHitDice(name: string): number  {
        console.log("getting hit dice:" + name)
        return this.getMatch(name)?.hitDice ?? 0
    }

    getWeaponProficiencies(name: string): WeaponType[]  {
        return this.getMatch(name)?.weaponProficiencies ?? []
    }

    getArmorProficiencies(name: string): ArmorTypes[]  {
        return this.getMatch(name)?.armorProficiencies ?? []
    }

    getSaveProficiencies(name: string): Abilities[]  {
        return this.getMatch(name)?.saves ?? []
    }

    getPrimaryAbilities(name: string): Abilities[] {
        return this.getMatch(name)?.primaryAbilities ?? []
    }
}
