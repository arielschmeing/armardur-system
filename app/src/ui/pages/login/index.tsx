import Styles from "./styles.module.css"

import { KeyIcon } from "../../components/icons/key"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { EmailIcon } from "../../components/icons/email"
import { ErrorMessage } from "../../components/error-message"
import { PageWrapper } from "../../components/page-wrapper"
import { useLogin } from "./use-login.hook"

export const LoginPage = () => {
    const { errors, handlerLoginUser, setValue, navigate } = useLogin()

    return (
        <PageWrapper>
            <section className={Styles.container__login}>
                <h1>Login</h1>

                <article>
                    <div className={Styles.container__inputs}>
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
                    </div>

                    <div className={Styles.container__buttons}>
                        <Button 
                            onClick={handlerLoginUser} 
                            text="Login" 
                            className="login__button" 
                        />
                        <Button 
                            onClick={() => {navigate("/register")}} 
                            text="Registrar" 
                            className="register__button" 
                        />
                    </div>
                </article>
            </section>
        </PageWrapper>
    )
}