import { Header } from "../../components/Header"
import { StyledButton } from "../../styles/buttons"
import { StyledHomePage, StyledNav } from "./style"
import { MdPersonAdd } from "react-icons/md";
import agenda from '../../assets/agenda.png'
import { StyledTitle1 } from "../../styles/tipography";

export const HomePage = () => {


    return (
        <StyledHomePage>
            <StyledNav>
                <div>
                    <figure><img src={agenda} alt="AgendaLogo" /></figure>
                    <StyledTitle1>Agenda Tech</StyledTitle1>
                </div>
            </StyledNav>
            <Header />
            <main>
                <div>
                    <p>Contatos</p>
                    <i><MdPersonAdd /></i>
                </div>
            </main>
        </StyledHomePage>
    )
}