import { ContactItem } from "./ContactItem"
import { StyledContactList } from "./style"

export const ContactList = ({ openEditContactModal }) => {

    return (
        <>
            <StyledContactList>
                <ContactItem openEditContactModal={openEditContactModal} />
                <ContactItem openEditContactModal={openEditContactModal} />
                <ContactItem openEditContactModal={openEditContactModal} />
                <ContactItem openEditContactModal={openEditContactModal} />
            </StyledContactList>
        </>
    )
}