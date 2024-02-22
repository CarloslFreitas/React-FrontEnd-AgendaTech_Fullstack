import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { SelectField } from '../../components/SelectField'
import { useForm } from 'react-hook-form';

export const ModalTechsRegister = ({ closeModal }) => {

   return (
      <StyledModal>
         <div className="modal-content" ref={modalRef} >

            <div className='modal-header'>
               <StyledTitle3>Adicionar Contato</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeModal}> X </span>
            </div>

            <form onSubmit={handleSubmit(submit)}>



            </form>
         </div>
      </StyledModal>
   )
}

