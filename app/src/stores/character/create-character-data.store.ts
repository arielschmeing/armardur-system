import { create } from "zustand";
import { Character } from "../../interfaces/domains/character.interface";
import { SetValue } from "../../types/set-value.type";

interface CreateCharacterData {
    character: Character | null
    submit?: () => Character | undefined
    setValue?: (...[key, value]: SetValue<Character>) => void
}

export const useCreateCharacterData = create<CreateCharacterData>((set, get) => {
    return {
        character: null,
        submit: undefined,
        setValue: (...[key, value]: SetValue<Character>) => {
            set({ character: { ...get().character!, [key]: value } })
        }
    }
})