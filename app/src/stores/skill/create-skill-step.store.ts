import { create } from "zustand";

export type SkillStepType = "resume" | "status" | "lists"

interface CreateSkillStep {
    step: SkillStepType
    updateStep: (newStep: SkillStepType) => void
}

export const useCreateSkillStep = create<CreateSkillStep>((set) => {
    return {
        step: "resume",
        updateStep: (newStep: SkillStepType) => {
            set({ step: newStep })
        }
    }
})