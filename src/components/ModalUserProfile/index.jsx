import { UserContext } from '../../providers/UserContext';
import { StyledTitle3 } from '../../styles/tipography'
import { StyledModal } from './style';
import { useContext, useEffect, useRef } from 'react';

export const ModalUserProfile = ({ closeProfileModal, openEditProfileModal }) => {

   const { user } = useContext(UserContext)
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
               <p>Nome: {user.fullname}</p>
               <p>Email: {user.email}</p>
               <p>Telefone: {user.phone}</p>

               <span onClick={openEditProfileModal}>
                  Editar Perfil
               </span>
            </form>
         </div>
      </StyledModal>
   )
}

