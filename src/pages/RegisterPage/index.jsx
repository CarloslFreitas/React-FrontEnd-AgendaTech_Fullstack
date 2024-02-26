import { StyledRegisterPage } from "./style";
import { StyledButton } from "../../styles/buttons";
import { StyledTitle1 } from "../../styles/tipography";
import { RegisterForm } from "../../components/RegisterForm";
import agenda from "../../assets/agenda.png";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <div>
          <figure>
            <img src={agenda} alt="agenda" />
          </figure>
          <StyledTitle1>CADASTRO</StyledTitle1>
        </div>
        <Link to={"/"}>
          <StyledButton buttonStyles="disable" height="40px">
            Voltar
          </StyledButton>
        </Link>
      </div>

      <RegisterForm />
    </StyledRegisterPage>
  );
};
