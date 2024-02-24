import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useEffect, useRef } from 'react';

export const ModalAddContact = ({ closeModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   useEffect(() => {
      const handleOutClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            closeModal()
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
               <StyledTitle3>Novo Contato</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeModal}> X </span>
            </div>

            <form>
               <InputField label='nome' />
               <InputField label='email' />
               <InputField lavel='telefone' />

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Contato
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

