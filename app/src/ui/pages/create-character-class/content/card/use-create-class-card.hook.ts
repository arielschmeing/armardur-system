import { useMutation } from "@tanstack/react-query"
import { useCreateClassData } from "../../../../../stores/class/create-class-data.store"
import { useCreateClassStep } from "../../../../../stores/class/create-class-step.store"
import { useUserAuth } from "../../../../../stores/user/user-auth.store"
import { useNavigate } from "react-router"
import { postClass } from "../../../../../services/character-class.service"

export const useCreateClassCard = () => {
    const navigate = useNavigate()

    const { step, updateStep } = useCreateClassStep()
    const { token } = useUserAuth()
    const { characterClass } = useCreateClassData()
    
    const { mutateAsync: postClassFn } = useMutation({
        mutationKey: ["postClass"],
        mutationFn: () => postClass({
            token: token!,
            request: characterClass
        }),
        onSuccess: () => navigate("/class")
    })

    const handlerPostSkill = async () => {
        await postClassFn()
    }

    const steps = {
        "resume": {
            back: {
                text: "Cancelar",
                id: "cancel__button",
                onClick: () => {useCreateClassData.setState({ characterClass: null }); navigate("/dashboard")}
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
                onClick: () => updateStep("mods")
            }
        },
        "mods": {
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