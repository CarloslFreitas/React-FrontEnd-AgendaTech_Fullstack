import { StyledText, StyledTitle1 } from '../../styles/tipography'
import { StyledHeader, StyledUserProfile } from './style'

export const Header = () => {

  return (
    <StyledHeader>

      <StyledUserProfile>

        <StyledTitle1> Olá, senhor </StyledTitle1>
        <StyledText textStyles={'headline-bold'} > alguma coisa </StyledText>

      </StyledUserProfile>

    </StyledHeader>
  )
}