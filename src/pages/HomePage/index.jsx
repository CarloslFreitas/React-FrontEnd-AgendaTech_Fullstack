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
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { ContactList } from "../../components/ContactList";
import { ModalEditContact } from "../../components/ModalEditContact";

export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const [isProfileModal, setIsProfileModal] = useState(false)
    const openProfileModal = () => setIsProfileModal(true)
    const closeProfileModal = () => setIsProfileModal(false)

    const [isEditProfileModal, setIsEditProfileModal] = useState(false)
    const openEditProfileModal = () => setIsEditProfileModal(true)
    const closeEditProfileModal = () => setIsEditProfileModal(false)

    const [isContactModal, setIsContactModal] = useState(false)
    const openContactModal = () => setIsContactModal(true)
    const closeContactModal = () => setIsContactModal(false)

    const [isEditContactModal, setIsEditContactModal] = useState(false)
    const openEditContactModal = () => setIsEditContactModal(true)
    const closeEditContactModal = () => setIsEditContactModal(false)

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
                <ContactList openEditContactModal={openEditContactModal} />
            </main>

            {isOpen && <ModalAddContact closeModal={closeModal} />}
            {isProfileModal && <ModalUserProfile closeProfileModal={closeProfileModal} openEditProfileModal={openEditProfileModal} />}
            {isEditProfileModal && <ModalEditProfile closeEditProfileModal={closeEditProfileModal} />}
            {isContactModal && <ModalExportContacts closeContactModal={closeContactModal} />}
            {isEditContactModal && <ModalEditContact closeEditContactModal={closeEditContactModal} />}
        </StyledHomePage>
    )
}