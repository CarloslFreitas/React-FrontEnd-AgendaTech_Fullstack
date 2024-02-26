import { useContext } from "react"
import { ContactItem } from "./ContactItem"
import { StyledContactList } from "./style"
import { ContactContext } from "../../providers/contactContext"

export const ContactList = ({ openEditContactModal }) => {
    const { contactList } = useContext(ContactContext)
    console.log(contactList);

    return (
        <>
            {contactList.length > 0
                ? <StyledContactList>
                    {
                        contactList.map(contact => <ContactItem key={contact.id} contact={contact} openEditContactModal={openEditContactModal} />)
                    }
                </StyledContactList>
                : <p className='empty-techs'> Você ainda não possui contatos registrados. </p>
            }
        </>
    )
}
