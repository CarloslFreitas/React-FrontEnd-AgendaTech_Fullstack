import { StyledTitle1, StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { useContext, useEffect, useRef } from 'react';
import { ContactContext } from '../../providers/contactContext';

export const ModalExportContacts = ({ closeContactModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   const { contactList } = useContext(ContactContext)

   const downloadFile = () => {
      const blob = new Blob([contactList], { type: `application/pdf` });
      const fileName = `contatos.pdf`;
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

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

            {contactList.length > 0
               ? <>
                  <ul>
                     <StyledTitle1>Contatos</StyledTitle1>
                     {contactList.map(contact => (
                        <li key={contact.id}>
                           <p>Nome: {contact.fullname}</p>
                           <p>Email:{contact.email}</p>
                           <p>Telefone: {contact.phone}</p>
                        </li>
                     ))}
                  </ul>
                  <button onClick={downloadFile}>Exportar Contatos</button>
               </>
               : <p className='empty-techs'> Nenhum contato para exportar! </p>
            }

         </div>
      </StyledModal>
   )
}

