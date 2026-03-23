import { Abilities } from "./Abilities";
import { ArmorTypes } from "./ArmorTypes";
import { Skill } from "./Skill";
import { WeaponType } from "./WeaponType";

type Profession = {
    name: string;
    description: string;
    hitDice: number;
    classSkills: Skill[];
    primaryAbilities: Abilities;[];
    saves: Abilities[]
    weaponProficiencies: WeaponType[];
    armorProficiencies: ArmorTypes[];
}