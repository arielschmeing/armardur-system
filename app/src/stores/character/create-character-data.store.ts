import { create } from "zustand";
import { SetValue } from "../../types/set-value.type";
import { CharacterRequestBody } from "../../interfaces/requests/character-request-body.interface";

interface CreateCharacterData {
    character: CharacterRequestBody | null
    submit?: () => CharacterRequestBody | undefined
    setValue?: (...[key, value]: SetValue<CharacterRequestBody>) => void
}

export const useCreateCharacterData = create<CreateCharacterData>((set, get) => {
    return {
        character: null,
        submit: undefined,
        setValue: (...[key, value]: SetValue<CharacterRequestBody>) => {
            set({ character: { ...get().character!, [key]: value } })
        }
    }
})