import { Header } from "../../components/Header"
import { StyledButton } from "../../styles/buttons"
import { StyledHomePage, StyledNav } from "./style"

export const HomePage = () => {


    return (
        <StyledHomePage>
            <StyledNav>
                <h1>Agenda Tech</h1>
                <StyledButton buttonStyle='disable' heigth='32px'>Sair</StyledButton>
            </StyledNav>
            <Header />
        </StyledHomePage>
    )
}