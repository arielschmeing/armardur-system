import Styles from "./styles.module.css"

import { ErrorMessage } from "../../../components/error-message"
import { EmailIcon } from "../../../components/icons/email"
import { KeyIcon } from "../../../components/icons/key"
import { UserIcon } from "../../../components/icons/user"
import { Input } from "../../../components/input"
import { RegisterUser } from "../../../../interfaces/register-user.interface"
import { Errors } from "../../../../hooks/use-form.hook"

interface RegisterFormProps {
    errors: Errors<RegisterUser>
    setValue: (key: keyof RegisterUser, value: string) => void
}

export const RegisterForm = ({ errors, setValue }: RegisterFormProps) => {
    return (
        <div className={Styles.container__inputs}>
            <ErrorMessage errorMessage={errors.messages.name} />
            <Input 
                className="login__input" 
                name="username"
                onChange={(e) => {setValue("name", e.target.value)}}
                type="text"
                placeholder="Nome"
            >
                <UserIcon />
            </Input>

            <ErrorMessage errorMessage={errors.messages.password} />
            <Input 
                className="login__input" 
                name="password"
                onChange={(e) => {setValue("password", e.target.value)}}
                type="password"
                placeholder="Senha"
            >
                <KeyIcon />
            </Input>

            <ErrorMessage errorMessage={errors.messages.passwordConfirmation} />
            <Input 
                className="login__input" 
                name="passwordConfirmation"
                onChange={(e) => {setValue("passwordConfirmation", e.target.value)}}
                type="password"
                placeholder="Confirmar senha"
            >
                <KeyIcon />
            </Input>

            <ErrorMessage errorMessage={errors.messages.email} />
            <Input 
                className="login__input" 
                name="email"
                onChange={(e) => {setValue("email", e.target.value)}}
                type="email"
                placeholder="Email"
            >
                <EmailIcon />
            </Input>
        </div>
    )
}