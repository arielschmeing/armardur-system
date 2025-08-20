import { useState } from "react"
import { SetValue } from "../types/set-value.type"

interface FormProps<T> {
    initialData?: T,
    validations?: {
        [K in keyof T]: (value: T[K]) => string | undefined
    },
    onSubmit?: (data: T) => void
}

export interface Errors<T> {
    messages: {
        [K in keyof T]?: string
    }
}

export const useForm = <T>({ initialData = {} as T, validations, onSubmit }: FormProps<T>) => {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({ messages: {} } as Errors<T>)

    const setValue = (...[key, value]: SetValue<T>) => {
        setData((prev) => ({ ...prev, [key]: value }))
    }

    const submit = () => {
        if (validations) {
          const messages = {} as Errors<T>["messages"]

          for (const key in validations) {
            messages[key] = validations[key]?.(data[key])
          }
    
          setErrors({ messages })
    
          if (Object.values(messages).some((message) => message)) return
        }

        onSubmit?.(data)
        return data
    }

    return {
        data,
        setValue,
        submit,
        errors
    }
}
