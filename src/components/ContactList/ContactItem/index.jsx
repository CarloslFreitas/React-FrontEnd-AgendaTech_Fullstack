import { StyledContactItem } from "./style"

export const ContactItem = ({ openEditContactModal }) => {

    const handleClick = () => {
        openEditContactModal()
    }

    return (
        <StyledContactItem onClick={handleClick} >
            <p className='contactDetail'>Fulano de tal</p>
            <p className='contactDetail'>email@mail.com</p>
            <p className='contactDetail'>(00) 00000-0000</p>
        </StyledContactItem>
    )
}