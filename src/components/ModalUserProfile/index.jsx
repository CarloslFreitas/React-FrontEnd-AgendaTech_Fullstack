import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { useEffect, useRef } from 'react';

export const ModalUserProfile = ({ closeProfileModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

   useEffect(() => {
      const handleOutClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            closeProfileModal()
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
               <StyledTitle3>Dados do Perfil</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeProfileModal}> X </span>
            </div>

            <form>
               <p>Nome: Fulado de Tal</p>
               <p>Email: Fulado@detal.om</p>
               <p>Telefone: (00) 00000-0000</p>

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Contato
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

