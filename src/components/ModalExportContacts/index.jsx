import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { useContext, useEffect, useRef } from 'react';
import { ContactContext } from '../../providers/contactContext';

export const ModalExportContacts = ({ closeContactModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   const { contactList } = useContext(ContactContext)

   useEffect(() => {
      const handleOutClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            closeContactModal()
         }
      }
      window.addEventListener("mousedown", handleOutClick)

      return () => {
         window.removeEventListener("mousedown", handleOutClick)
      }
   }, [])

   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === 'Escape')
            buttonRef.current?.click()
      }
      window.addEventListener('keydown', handleKeyDown)

      return () => {
         window.removeEventListener('keydown', handleKeyDown)
      }
   }, [])

   return (
      <StyledModal>
         <div className="modal-content" ref={modalRef} >
            <div className='modal-header'>
               <StyledTitle3>Lista de Contatos</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeContactModal}> X </span>
            </div>

            <ul>
               {contactList.map(contact => (
                  <li key={contact.id}>
                     <p>{contact.fullname}</p>
                     <p>{contact.email}</p>
                     <p>{contact.phone}</p>
                  </li>
               ))}
            </ul>

         </div>
      </StyledModal>
   )
}

