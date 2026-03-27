import type {Skill} from "./Skill.tsx";

export type Background = {
    name: string,
    description: string,
    skills: Skill[],
    skillOption: Skill[],
    toolProficiencies: string[],
    traits: string[],
    equipment: string[]
    meseta: number,
}