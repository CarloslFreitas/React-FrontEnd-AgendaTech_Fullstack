import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { useEffect, useRef } from 'react';

export const ModalExportContacts = ({ closeContactModal }) => {

   const modalRef = useRef(null)
   const buttonRef = useRef(null)

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

            <form>
               <li>
                  <p>nome: fulado</p>
                  <p>email: fulado@detal.com</p>
                  <p>telefone: (00) 00000-0000</p>
               </li>
               <li>
                  <p>nome: fulado</p>
                  <p>email: fulado@detal.com</p>
                  <p>telefone: (00) 00000-0000</p>
               </li>
               <li>
                  <p>nome: fulado</p>
                  <p>email: fulado@detal.com</p>
                  <p>telefone: (00) 00000-0000</p>
               </li>
               <li>
                  <p>nome: fulado</p>
                  <p>email: fulado@detal.com</p>
                  <p>telefone: (00) 00000-0000</p>
               </li>
            </form>

         </div>
      </StyledModal>
   )
}

