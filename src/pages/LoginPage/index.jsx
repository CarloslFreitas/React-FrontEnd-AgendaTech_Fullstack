import { LoginForm } from "../../components/LoginForm"
import { StyledLoginPage } from "./style"
import agenda from '../../assets/agenda.png'
import { StyledTitle1 } from "../../styles/tipography"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <div>
                <figure><img src={agenda} alt='agenda' /></figure>
                <StyledTitle1>Agenda Tech</StyledTitle1>
            </div>
            <LoginForm />
        </StyledLoginPage>
    )
}