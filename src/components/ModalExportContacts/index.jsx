import { StyledTitle1, StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { useContext, useEffect, useRef } from 'react';
import { ContactContext } from '../../providers/contactContext';
import { useReactToPrint } from 'react-to-print'

export const ModalExportContacts = ({ closeContactModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   const { contactList, formatPhone } = useContext(ContactContext)

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

   const contentDoc = useRef();
   const handlePrint = useReactToPrint({
      content: () => contentDoc.current,
   })

   return (
      <StyledModal>
         <div className="modal-content" ref={modalRef} >
            <div className='modal-header'>
               <StyledTitle3>Lista de Contatos</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeContactModal}> X </span>
            </div>

            {contactList.length > 0
               ? <>
                  <div className='listContent' ref={contentDoc}>
                     <h1 className='listTitle'>Contatos</h1>
                     <div className='listColums'>
                        <ul>
                           <h2>Nome</h2>
                           {contactList.map(contact => (
                              <li key={contact.id}>
                                 <div><p>{contact.fullname}</p></div>

                              </li>
                           ))}
                        </ul>
                        <ul>
                           <h2>Email</h2>
                           {contactList.map(contact => (
                              <li key={contact.id}>
                                 <div><p>{contact.email}</p></div>

                              </li>
                           ))}
                        </ul>
                        <ul>
                           <h2>Telefone</h2>
                           {contactList.map(contact => (
                              <li key={contact.id}>
                                 <div><p>{formatPhone(contact.phone)}</p></div>

                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <button onClick={handlePrint}>Exportar Contatos</button>
               </>
               : <p className='empty-techs'> Nenhum contato para exportar! </p>
            }

         </div>
      </StyledModal>
   )
}

