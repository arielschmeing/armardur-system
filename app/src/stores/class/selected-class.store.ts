import { create } from "zustand";
import { CharacterClass } from "../../interfaces/domains/character-class.interface";

interface SelectedClass {
    selectedClass: CharacterClass | null
    updateClass: (newClass: CharacterClass) => void
}

export const useSelectedClass = create<SelectedClass>((set) => {
    return {
        selectedClass: null,
        updateClass: (newClass: CharacterClass) => {
            set({ selectedClass: newClass })
        }
    }
})