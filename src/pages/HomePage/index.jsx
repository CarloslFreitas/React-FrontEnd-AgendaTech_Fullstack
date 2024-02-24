import { Header } from "../../components/Header"
import { StyledButton } from "../../styles/buttons"
import { StyledHomePage, StyledNav } from "./style"
import { MdPersonAdd } from "react-icons/md";
import agenda from '../../assets/agenda.png'
import { StyledTitle1 } from "../../styles/tipography";
import { useState } from "react";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalUserProfile } from "../../components/ModalUserProfile";
import { ModalExportContacts } from "../../components/ModalExportContacts";

export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const [isProfileModal, setIsProfileModal] = useState(false)
    const openProfileModal = () => setIsProfileModal(true)
    const closeProfileModal = () => setIsProfileModal(false)

    const [isContactModal, setIsContactModal] = useState(false)
    const openContactModal = () => setIsContactModal(true)
    const closeContactModal = () => setIsContactModal(false)

    return (
        <StyledHomePage>
            <StyledNav>
                <div>
                    <figure><img src={agenda} alt="AgendaLogo" /></figure>
                    <StyledTitle1>Agenda Tech</StyledTitle1>
                </div>
            </StyledNav>
            <Header openProfileModal={openProfileModal} openContactModal={openContactModal} />
            <main>
                <div>
                    <p>Contatos</p>
                    <i><MdPersonAdd onClick={openModal} /></i>
                </div>
            </main>

            {isOpen && <ModalAddContact closeModal={closeModal} />}
            {isProfileModal && <ModalUserProfile closeProfileModal={closeProfileModal} />}
            {isContactModal && <ModalExportContacts closeContactModal={closeContactModal} />}
        </StyledHomePage>
    )
}