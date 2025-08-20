import { create } from "zustand";
import { NavigateType } from "../../ui/pages/character/use-character-page.hook";

interface CharacterNavigate {
    navigate: NavigateType
    updateNavigate: (newNavigate: NavigateType) => void
}

export const useCharacterNavigate = create<CharacterNavigate>((set) => {
    return {
        navigate: "general",
        updateNavigate: (newNavigate: NavigateType) => {
            set({ navigate: newNavigate })
        }
    }
})