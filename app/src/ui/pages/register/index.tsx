import Styles from "./styles.module.css"

import { Button } from "../../components/button"
import { PageWrapper } from "../../components/page-wrapper"
import { useRegister } from "./use-register.hook"
import { RegisterForm } from "./form"
import { Logo } from "../../components/logo"

export const RegisterPage = () => {
    const { handlerSubmitUser, errors, setValue, navigate } = useRegister()

    return (
        <PageWrapper>
            <div className={Styles.container}>
                <section className={Styles.container__register}>
                    <h1>Registrar</h1>

                    <article>
                        <RegisterForm 
                            errors={errors} 
                            setValue={setValue} 
                        />

                        <div className={Styles.container__buttons}>
                            <Button onClick={handlerSubmitUser} text="Registrar-se" className="login__button" />

                            <Button onClick={() => navigate("/login")} text="Login" className="register__button" />
                        </div>
                    </article>
                </section>

                <Logo size="200px" />
            </div>
        </PageWrapper>
    )
}