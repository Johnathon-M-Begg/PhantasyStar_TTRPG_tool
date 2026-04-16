import { AbilitiesEnum } from "./enums/AbilitiesEnum.tsx";
import { ArmorTypesEnum } from "./enums/ArmorTypesEnum.tsx";
import { SkillEnum } from "./enums/SkillEnum.tsx";
import { WeaponTypeEnum } from "./enums/WeaponTypeEnum.tsx";

export type Profession = {
    name: string;
    description: string;
    hitDice: number;
    skillCount: number;
    primaryAbilities: AbilitiesEnum[];
    techAbility: AbilitiesEnum | null;
    classSkills: SkillEnum[];
    saves: AbilitiesEnum[]
    weaponProficiencies: WeaponTypeEnum[];
    armorProficiencies: ArmorTypesEnum[];
}