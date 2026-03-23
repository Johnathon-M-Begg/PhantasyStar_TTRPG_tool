type Profession = {
    name: string;
    description: string;
    hitDice: number;
    classSkills: Skill[];
    primaryAbilities: string[];
    weaponProficiencies: WeaponType[];
    armorProficiencies: ArmorTypes[];
}