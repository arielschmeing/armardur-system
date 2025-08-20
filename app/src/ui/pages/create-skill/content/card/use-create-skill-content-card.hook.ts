import { useMutation } from "@tanstack/react-query"
import { useCreateSkillStep } from "../../../../../stores/skill/create-skill-step.store"
import { postSkill } from "../../../../../services/skill.service"
import { useUserAuth } from "../../../../../stores/user/user-auth.store"
import { useCreateSkillData } from "../../../../../stores/skill/create-skill-data.store"
import { useNavigate } from "react-router"
import { Element } from "../../../../../enums/element.enum"

export const useCreateSkillContentCard = () => {
    const navigate = useNavigate()

    const { step, updateStep } = useCreateSkillStep()
    const { token } = useUserAuth()
    const { skill, submit, setValue } = useCreateSkillData()
    
    const { mutateAsync: postSkillFn } = useMutation({
        mutationKey: ["postSkill"],
        mutationFn: () => postSkill({
            token: token!,
            request: skill
        }),
        onSuccess: () => navigate("/skill")
    })

    const handlerPostSkill = async () => {
        if(submit && !submit() || !setValue) return

        const elementsLength = skill?.elements?.length

        if(elementsLength === 0 || !skill?.elements) setValue("elements", [Element.UNRESTRICTED])

        if(elementsLength !== 0 && skill?.elements?.some(e => e === Element.UNRESTRICTED)) {
            setValue("elements", skill.elements.filter(e => e !== Element.UNRESTRICTED))
        }

        await postSkillFn()
    }

    const steps = {
        "resume": {
            back: {
                text: "Cancelar",
                id: "cancel__button",
                onClick: () => {useCreateSkillData.setState({ skill: null }); navigate("/dashboard")}
            },
            next: {
                text: "Próximo",
                id: "add__button",
                onClick: () => updateStep("status")
            }
        },
        "status": {
            back: {
                text: "Voltar",
                id: "add__button",
                onClick: () => updateStep("resume")
            },
            next: {
                text: "Próximo",
                id: "add__button",
                onClick: () => updateStep("lists")
            }
        },
        "lists": {
            back: {
                text: "Voltar",
                id: "add__button",
                onClick: () => updateStep("status")
            },
            next: {
                text: "Criar",
                id: "confirmed__button",
                onClick: async () => await handlerPostSkill()
            }
        }
    }

    return {
        steps,
        step
    }
}