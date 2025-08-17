import { create } from "zustand";

export type StepType = "resume" | "status" | "lists"

interface CreateSkillStep {
    step: StepType
    updateStep: (newStep: StepType) => void
}

export const useCreateSkillStep = create<CreateSkillStep>((set) => {
    return {
        step: "resume",
        updateStep: (newStep: StepType) => {
            set({ step: newStep })
        }
    }
})