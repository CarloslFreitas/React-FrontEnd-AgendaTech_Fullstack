import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useContext, useEffect, useRef } from 'react';
import { ContactContext } from '../../providers/contactContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationEditContactSchema } from './validationAddContactFormSchema';

export const ModalEditContact = ({ closeEditContactModal }) => {

   const { deleteContact, contactClicked, editContact } = useContext(ContactContext)

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(validationEditContactSchema)
   })

   const submit = async (formData) => {
      await editContact(formData, contactClicked.id, closeEditContactModal)
      console.log(contactClicked.id);
      console.log(formData);
   }

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

            <form onSubmit={handleSubmit(submit)}>
               <InputField
                  {...register('fullname', { optional: true })}
                  label='Nome'
                  labelFor='userName'
                  id='userName'
                  type='text'
                  placeholder='Nome do contato (Opcional)'
                  helperText={''}
                  errorMessage={errors.fullname?.message}
               />
               <InputField
                  {...register('email', { optional: true })}
                  label='Email'
                  labelFor='userEmail'
                  id='userEmail'
                  type='email'
                  placeholder='Email do contato (Opcional)'
                  helperText={''}
                  errorMessage={errors.email?.message}
               />
               <InputField
                  {...register('phone', { optional: true })}
                  label='Telefone'
                  labelFor='userPhone'
                  id='userPhone'
                  type='text'
                  placeholder='Telefone para contato (Opcional)'
                  helperText={''}
                  errorMessage={errors.phone?.message}
               />

               <div className='buttons-container'>
                  <StyledButton className='save' buttonStyles='primary' height='48px'>
                     Salvar Alteração
                  </StyledButton>

                  <StyledButton onClick={() => deleteContact(contactClicked.id, closeEditContactModal)} className='delete' buttonStyles='disable' height='48px' type='button'>
                     Excluir
                  </StyledButton>
               </div>
            </form>
         </div>
      </StyledModal>
   )
}

