import { create } from "zustand";

export type ClassStepType = "resume" | "status" | "mods"

interface CreateClassStep {
    step: ClassStepType
    updateStep: (newStep: ClassStepType) => void
}

export const useCreateClassStep = create<CreateClassStep>((set) => {
    return {
        step: "resume",
        updateStep: (newStep: ClassStepType) => {
            set({ step: newStep })
        }
    }
})