import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useEffect, useRef } from 'react';

export const ModalEditContact = ({ closeEditContactModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   useEffect(() => {
      const handleOutClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            closeEditContactModal()
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
               <StyledTitle3>Editar Contato</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeEditContactModal}> X </span>
            </div>

            <form>
               <InputField label='nome' />
               <InputField label='email' />
               <InputField label='telefone' />

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Alteração
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

