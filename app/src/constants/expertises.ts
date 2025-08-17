import { Attribute } from "../enums/attribute.enum";
import { Expertise } from "../enums/expertise.enum";

export const EXPERTISES = new Map<Attribute, Expertise[]>([
    [Attribute.CHARISMA, [
        Expertise.DECEPTION, 
        Expertise.INTIMIDATION,
        Expertise.PERFORMANCE,
        Expertise.PERSUASION
    ]],
    [Attribute.CONSTITUTION, []],
        [Attribute.DEXTERITY, [
        Expertise.ACROBATICS,
        Expertise.SLEIGHT_OF_HAND,
        Expertise.STEALTH
    ]],
    [Attribute.ELEMENTAL, [
        Expertise.ARCANA,
        Expertise.HISTORY,
        Expertise.INVESTIGATION,
        Expertise.NATURE,
        Expertise.RELIGION
    ]],
    [Attribute.MENTAL, []],
    [Attribute.STRENGTH, [
        Expertise.ATHLETICS
    ]],
    [Attribute.WISDOM, [
        Expertise.SURVIVAL,
        Expertise.PERCEPTION,
        Expertise.MEDICINE,
        Expertise.INSIGHT,
        Expertise.ANIMAL_HANDLING
    ]]
]);