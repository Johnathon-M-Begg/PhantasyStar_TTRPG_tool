import type {SkillEnum} from "./enums/SkillEnum.tsx";

export type Background = {
    name: string,
    description: string,
    skills: SkillEnum[],
    skillOption: SkillEnum[],
    toolProficiencies: string[],
    traits: string[],
    equipment: string[]
    meseta: number,
}