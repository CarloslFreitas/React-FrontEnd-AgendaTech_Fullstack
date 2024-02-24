import { StyledButton } from '../../styles/buttons'
import { StyledText, StyledTitle1 } from '../../styles/tipography'
import { StyledHeader, StyledUserProfile } from './style'

export const Header = () => {

  return (
    <StyledHeader>

      <StyledUserProfile>

        <StyledTitle1> Olá, senhor </StyledTitle1>
        <div>
          <StyledButton buttonStyles='primary' height='40px'> Meu Perfil </StyledButton>
          <StyledButton buttonStyles='primary' height='40px'> Exibir Contatos </StyledButton>
          <StyledButton buttonStyles='disable' height='40px'> Sair </StyledButton>
        </div>

      </StyledUserProfile>

    </StyledHeader>
  )
}