import { create } from "zustand";
import { CharacterClass } from "../../interfaces/domains/character-class.interface";
import { ClassLevel } from "../../interfaces/domains/class-level.interface";
import { SetValue } from "../../types/set-value.type";

interface CreateClassData {
    characterClass: CharacterClass | null
    submit?: () => CharacterClass | undefined
    setValue?: (key: keyof CharacterClass, value: string | number | ClassLevel[] | undefined) => void
}

export const useCreateClassData = create<CreateClassData>((set, get) => {
    return {
        characterClass: null,
        submit: undefined,
        setValue: (...[key, value]: SetValue<CharacterClass>) => {
            set({ characterClass: { ...get().characterClass!, [key]: value } })
        }
    }
})