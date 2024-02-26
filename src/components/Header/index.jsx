import { useContext } from 'react'
import { StyledButton } from '../../styles/buttons'
import { StyledText, StyledTitle1 } from '../../styles/tipography'
import { StyledHeader, StyledUserProfile } from './style'
import { UserContext } from '../../providers/UserContext'

export const Header = ({ openProfileModal, openContactModal }) => {

  const { user, userLogout, logoutTime } = useContext(UserContext)
  console.log(user);

  return (
    <StyledHeader>

      <StyledUserProfile>

        <StyledTitle1> Bem Vindo, {user.fullname} </StyledTitle1>
        <div>
          <StyledButton buttonStyles='primary' height='40px' onClick={openProfileModal}> Meu Perfil </StyledButton>
          <StyledButton buttonStyles='primary' height='40px' onClick={openContactModal} > Exibir Contatos </StyledButton>
          <StyledButton
            buttonStyles='disable'
            height='40px'
            onClick={() => userLogout()} disabled={logoutTime}>
            {logoutTime ?
              <span className='loader'>
                <span className='loader__ball'></span>
                <span className='loader__ball'></span>
                <span className='loader__ball'></span>
              </span> : 'Sair'}
          </StyledButton>
        </div>

      </StyledUserProfile>

    </StyledHeader>
  )
}