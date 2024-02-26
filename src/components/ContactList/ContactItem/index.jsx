import { useContext } from "react"
import { StyledContactItem } from "./style"
import { ContactContext } from "../../../providers/contactContext"

export const ContactItem = ({ openEditContactModal, contact }) => {

    const { setContactClicked, formatPhone } = useContext(ContactContext)

    const handleClick = () => {
        setContactClicked(contact)
        openEditContactModal()
    }

    return (
        <StyledContactItem onClick={handleClick} >
            <p className='contactDetail'>{contact.fullname}</p>
            <p className='contactDetail'>{contact.email}</p>
            <p className='contactDetail'>{formatPhone(contact.phone)}</p>
        </StyledContactItem>
    )
}

