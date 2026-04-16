import type {Background} from "../DataObjects/Background.tsx";
import {SkillEnum} from "../DataObjects/enums/SkillEnum.tsx";


export class BackgroundService {
    backgrounds: Background[] = [
        {
            name: "Acolyte",
            description:"You devoted yourself to the service of a temple of a\n" +
                "specific faith or deity. There you perform rites and\n" +
                "ceremonies with fellow worshippers in accordance to\n" +
                "your sacred beliefs",
            skills: [SkillEnum.insight, SkillEnum.lore],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Celebrity",
            description:"You are famous. Everyone in the region knows your\n" +
                "name and what you do. You have a knack for attracting\n" +
                "public attention and know how to work a crowd. Most\n" +
                "of your life has been spent in the limelight, whether you\n" +
                "enjoyed it or not.",
            skills: [SkillEnum.insight, SkillEnum.performance],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 200,
        },
        {
            name: "Crafter",
            description:"You are an artisan who excels at practicing and selling\n" +
                "your craft. Various merchants and other crafters fall\n" +
                "under your list of contacts.",
            skills: [SkillEnum.insight, SkillEnum.persuasion],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 180,
        },
        {
            name: "Drifter",
            description:"You have spent most of your life wandering from cities\n" +
                "or planets, earning your keep when needed and moving\n" +
                "on when it is time. You have your own reasons. Maybe\n" +
                "you were forced into this life. Maybe you just wanted\n" +
                "to do something different. You may think of stopping\n" +
                "someday… maybe…",
            skills: [SkillEnum.persuasion, SkillEnum.survival],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Investigator",
            description:"You have made a career out of getting the latest\n" +
                "information, gathering local rumors, or locating hard\n" +
                "evidence. You may have done it for a noble cause, as\n" +
                "part of your job as an agent or a reporter, in pursuit of\n" +
                "a personal truth, or perhaps just because you have a\n" +
                "talent for it.",
            skills: [SkillEnum.insight, SkillEnum.investigation],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Local Hero",
            description:"You come from humble beginnings but have the\n" +
                "potential to be much, much more. The people of your\n" +
                "colony or hometown regard you as a hero or protector.\n" +
                "You feel your destiny calls you to defend and protect the\n" +
                "innocent from tyrants, monsters, or other threats.",
            skills: [SkillEnum.insight, SkillEnum.persuasion],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Outlander",
            description:"You grew up close to nature, cultivating your planet’s\n" +
                "environment and tending to the local beasts. You have\n" +
                "survived more natural hazards than most commoners\n" +
                "could comprehend, and enjoyed the solitude of being\n" +
                "the only person for miles in any direction.",
            skills: [SkillEnum.survival, SkillEnum.xenobiology],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Outlaw",
            description:"You have run afoul of the law at least once or twice.\n" +
                "It has given you a different perspective and maybe a\n" +
                "bit more experience than you asked for. You may have\n" +
                "acquaintances in the criminal underworld and can often\n" +
                "sniff out the bad seed in a bunch.",
            skills: [SkillEnum.deception, SkillEnum.stealth],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 180,
        },
        {
            name: "Patrician",
            description:"You are a member of the societal elite. You may have\n" +
                "been born into a noble family or gained status in an\n" +
                "influential organization. Or perhaps you garnered a lot\n" +
                "of political favors. Either way, you are considered part\n" +
                "of the upper class—and you have the clout to prove it",
            skills: [SkillEnum.deception, SkillEnum.persuasion],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 200,
        },
        {
            name: "Pilot",
            description:"If it has controls, you can probably figure out how to\n" +
                "drive or fly it. You may be a retired fighter jock, a stunt\n" +
                "driver, or a transport pilot, or perhaps you picked up a\n" +
                "knack for it when you were young.",
            skills: [SkillEnum.insight],
            skillOption: [SkillEnum.computers, SkillEnum.mechanics],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 160,
        },
        {
            name: "Scholar",
            description:"You specialize in a particular field of knowledge that\n" +
                "you have spent much of your early years studying.\n" +
                "Knowledge is the key to the mysteries of the universe\n" +
                "and you strive to learn enough to become a master in\n" +
                "your field.",
            skills: [SkillEnum.lore],
            skillOption: [SkillEnum.astrophysics, SkillEnum.medicine, SkillEnum.xenobiology],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 160,
        },
        {
            name: "Soldier",
            description:"You have trained for war. Your experience has taught\n" +
                "you how to survive in the field both alone and with a\n" +
                "group of fellow combatants. You may have been an\n" +
                "army grunt, a knight, or a rebel mercenary",
            skills: [SkillEnum.athletics, SkillEnum.survival],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Techie",
            description:"You are a whiz at technical stuff. Computers or\n" +
                "machines are your forte. You are just as comfortable\n" +
                "around the hum of machinery and the droning of robots\n" +
                "as you are around other people.",
            skills: [SkillEnum.computers, SkillEnum.mechanics],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 150,
        },
        {
            name: "Wayfarer",
            description:"You spent much of your life on the streets or as a\n" +
                "vagrant in towns and villages. You slept where you\n" +
                "could and did odd jobs for food. At times, when the\n" +
                "hunger became unbearable, you may have resorted\n" +
                "to theft. Still, you never lost your pride and never\n" +
                "abandoned hope.",
            skills: [SkillEnum.insight, SkillEnum.stealth],
            skillOption: [],
            toolProficiencies: [],
            traits: [],
            equipment: [],
            meseta: 100,
        },
    ]

        getMatch(name: string): Background | undefined {
            return this.backgrounds.find(background => background.name === name);
        }

        getSkills(name: string): SkillEnum[] {
            return this.getMatch(name)?.skills ?? [];
        }

        getSkillOptions(name: string): SkillEnum[] {
            return this.getMatch(name)?.skillOption ?? [];
        }
}