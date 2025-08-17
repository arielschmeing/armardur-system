import { create } from "zustand";
import { Character } from "../interfaces/domains/character.interface";

interface SelectedCharacter {
    selectedCharacter: Character | undefined
    updateCharacter: (newCharacter: Character) => void
}

export const useSelectedCharacter = create<SelectedCharacter>((set) => {
    return {
        selectedCharacter: undefined,
        updateCharacter: (newCharacter: Character) => {
            set({ selectedCharacter: newCharacter })
        }
    }
})