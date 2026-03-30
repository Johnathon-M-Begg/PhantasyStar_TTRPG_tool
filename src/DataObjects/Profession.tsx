import { Abilities } from "./Abilities";
import { ArmorTypes } from "./ArmorTypes";
import { Skill } from "./Skill";
import { WeaponType } from "./WeaponType";

export type Profession = {
    name: string;
    description: string;
    hitDice: number;
    skillCount: number;
    primaryAbilities: Abilities[];
    techAbility: Abilities | null;
    classSkills: Skill[];
    saves: Abilities[]
    weaponProficiencies: WeaponType[];
    armorProficiencies: ArmorTypes[];
}