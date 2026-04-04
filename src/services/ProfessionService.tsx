import type {Profession} from "../DataObjects/Profession.tsx";
import {WeaponTypeEnum} from "../DataObjects/enums/WeaponTypeEnum.tsx";
import {SkillEnum} from "../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../DataObjects/enums/AbilitiesEnum.tsx";
import {ArmorTypesEnum} from "../DataObjects/enums/ArmorTypesEnum.tsx";

export class ProfessionService {

    professions: Profession[] = [
        {
            name: "Guardian",
            description: "Versatile combatant and defender",
            hitDice: 10,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Strength, AbilitiesEnum.Charisma],
            techAbility: AbilitiesEnum.Charisma,
            classSkills: [
                SkillEnum.athletics,
                SkillEnum.insight,
                SkillEnum.intimidation,
                SkillEnum.mechanics,
                SkillEnum.medicine,
                SkillEnum.perception,
                SkillEnum.persuasion,
            ],
            saves: [AbilitiesEnum.Wisdom, AbilitiesEnum.Charisma],
            weaponProficiencies: [
                WeaponTypeEnum.axe,
                WeaponTypeEnum.claw,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.pistol,
                WeaponTypeEnum.rod,
                WeaponTypeEnum.slasher,
                WeaponTypeEnum.sword,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
                ArmorTypesEnum.medium,
                ArmorTypesEnum.heavy,
                ArmorTypesEnum.shield,
            ]
        },
        {
            name: "Hunter",
            description: "Combines weapon skills with technique use",
            hitDice: 10,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Wisdom, AbilitiesEnum.Strength, AbilitiesEnum.Dexterity],
            techAbility: AbilitiesEnum.Wisdom,
            saves: [AbilitiesEnum.Strength, AbilitiesEnum.Dexterity],
            classSkills: [
                SkillEnum.acrobatics,
                SkillEnum.athletics,
                SkillEnum.insight,
                SkillEnum.investigation,
                SkillEnum.perception,
                SkillEnum.stealth,
                SkillEnum.survival,
                SkillEnum.xenobiology,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.axe,
                WeaponTypeEnum.bow,
                WeaponTypeEnum.claw,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.pistol,
                WeaponTypeEnum.rifle,
                WeaponTypeEnum.slasher,
                WeaponTypeEnum.sword,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
                ArmorTypesEnum.medium,
                ArmorTypesEnum.shield,
            ],
        },
        {
            name: "Mystic",
            description: "Combat adept with spiritual techniques",
            hitDice: 8,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Dexterity, AbilitiesEnum.Wisdom],
            techAbility: AbilitiesEnum.Wisdom,
            saves: [AbilitiesEnum.Strength, AbilitiesEnum.Dexterity],
            classSkills: [
                SkillEnum.acrobatics,
                SkillEnum.athletics,
                SkillEnum.insight,
                SkillEnum.lore,
                SkillEnum.performance,
                SkillEnum.stealth,
                SkillEnum.survival,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.claw,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.rod,
                WeaponTypeEnum.slasher,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
            ],
        },
        {
            name: "Operative",
            description: "Expert in infiltration and exploration",
            hitDice: 8,
            skillCount: 4,
            primaryAbilities: [AbilitiesEnum.Dexterity],
            techAbility: null,
            saves: [AbilitiesEnum.Intelligence, AbilitiesEnum.Dexterity],
            classSkills: [
                SkillEnum.acrobatics,
                SkillEnum.computers,
                SkillEnum.deception,
                SkillEnum.insight,
                SkillEnum.intimidation,
                SkillEnum.investigation,
                SkillEnum.perception,
                SkillEnum.persuasion,
                SkillEnum.slightOfHand,
                SkillEnum.stealth,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.bow,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.pistol,
                WeaponTypeEnum.rod,
                WeaponTypeEnum.slasher,
                WeaponTypeEnum.sword,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
                ArmorTypesEnum.shield,
            ],
        },
        {
            name: "Savant",
            description: "Specialist in biotech or machines",
            hitDice: 8,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Wisdom],
            techAbility: AbilitiesEnum.Wisdom,
            saves: [AbilitiesEnum.Wisdom, AbilitiesEnum.Charisma],
            classSkills: [
                SkillEnum.astrophysics,
                SkillEnum.computers,
                SkillEnum.insight,
                SkillEnum.lore,
                SkillEnum.mechanics,
                SkillEnum.medicine,
                SkillEnum.persuasion,
                SkillEnum.xenobiology,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.bow,
                WeaponTypeEnum.claw,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.pistol,
                WeaponTypeEnum.rod,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
                ArmorTypesEnum.medium,
                ArmorTypesEnum.shield,
            ],
        },
        {
            name: "Thaumaturge",
            description: "Channelers of arcane power and elemental energy",
            hitDice: 6,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Intelligence],
            techAbility: AbilitiesEnum.Intelligence,
            saves: [AbilitiesEnum.Intelligence, AbilitiesEnum.Wisdom],
            classSkills: [
                SkillEnum.astrophysics,
                SkillEnum.insight,
                SkillEnum.investigation,
                SkillEnum.lore,
                SkillEnum.medicine,
                SkillEnum.perception,
                SkillEnum.xenobiology,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.rod,
                WeaponTypeEnum.slasher,
            ],
            armorProficiencies: [
            ],
        },
        {
            name: "Warrior",
            description: "Master of arms and armor",
            hitDice: 10,
            skillCount: 2,
            primaryAbilities: [AbilitiesEnum.Strength, AbilitiesEnum.Dexterity],
            techAbility: null,
            saves: [AbilitiesEnum.Strength, AbilitiesEnum.Constitution],
            classSkills: [
                SkillEnum.acrobatics,
                SkillEnum.athletics,
                SkillEnum.insight,
                SkillEnum.intimidation,
                SkillEnum.lore,
                SkillEnum.perception,
                SkillEnum.persuasion,
                SkillEnum.survival,
            ],
            weaponProficiencies: [
                WeaponTypeEnum.axe,
                WeaponTypeEnum.bow,
                WeaponTypeEnum.claw,
                WeaponTypeEnum.dagger,
                WeaponTypeEnum.pistol,
                WeaponTypeEnum.rod,
                WeaponTypeEnum.rifle,
                WeaponTypeEnum.slasher,
                WeaponTypeEnum.sword,
            ],
            armorProficiencies: [
                ArmorTypesEnum.light,
                ArmorTypesEnum.medium,
                ArmorTypesEnum.heavy,
                ArmorTypesEnum.shield,
            ],
        },
    ]

    getMatch(name: string): Profession | undefined {
        return this.professions.find(profession => profession.name === name)
    }

    getDescription(name: string): string | undefined {
        return this.getMatch(name)?.description
    }

    getProfessionSkills(name: string): SkillEnum[]  {
        return this.getMatch(name)?.classSkills ?? []
    }

    getSkillPoints(name: string): number  {
        return this.getMatch(name)?.skillCount ?? 0
    }

    getHitDice(name: string): number  {
        return this.getMatch(name)?.hitDice ?? 0
    }

    getWeaponProficiencies(name: string): WeaponTypeEnum[]  {
        return this.getMatch(name)?.weaponProficiencies ?? []
    }

    getArmorProficiencies(name: string): ArmorTypesEnum[]  {
        return this.getMatch(name)?.armorProficiencies ?? []
    }

    getSaveProficiencies(name: string): AbilitiesEnum[]  {
        return this.getMatch(name)?.saves ?? []
    }

    getPrimaryAbilities(name: string): AbilitiesEnum[] {
        return this.getMatch(name)?.primaryAbilities ?? []
    }

    getTechAbility(name: string): AbilitiesEnum | null {
        return this.getMatch(name)?.techAbility ?? null
    }
}
