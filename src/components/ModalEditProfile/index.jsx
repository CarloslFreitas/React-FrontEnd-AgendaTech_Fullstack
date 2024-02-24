import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useEffect, useRef } from 'react';

export const ModalEditProfile = ({ closeEditProfileModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   useEffect(() => {
      const handleOutClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            closeEditProfileModal()
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
               <StyledTitle3>Editar Perfil</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeEditProfileModal}> X </span>
            </div>

            <form>
               <InputField label='nome' />
               <InputField label='email' />
               <InputField label='telefone' />

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Alterações
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

