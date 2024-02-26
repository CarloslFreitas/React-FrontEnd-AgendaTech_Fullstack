import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useContext, useEffect, useRef } from 'react';
import { validationAddContactSchema } from './validationAddContactFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactContext } from '../../providers/contactContext';

export const ModalAddContact = ({ closeModal }) => {

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: zodResolver(validationAddContactSchema)
   });

   const { createContact } = useContext(ContactContext)

   const submit = async (formData) => {
      console.log(formData);
      createContact(formData)
      reset();
   }

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

            <form onSubmit={handleSubmit(submit)} noValidate >
               <InputField
                  {...register('fullname')}
                  label='Nome'
                  labelFor='userName'
                  id='userName'
                  type='text'
                  placeholder='Nome do contato'
                  helperText={''}
                  errorMessage={errors.fullname?.message}
               />
               <InputField
                  {...register('email')}
                  label='Email'
                  labelFor='userEmail'
                  id='userEmail'
                  type='email'
                  placeholder='Email do contato'
                  helperText={''}
                  errorMessage={errors.email?.message}
               />
               <InputField
                  {...register('phone')}
                  label='Telefone'
                  labelFor='userPhone'
                  id='userPhone'
                  type='text'
                  placeholder='Telefone para contato'
                  helperText={''}
                  errorMessage={errors.phone?.message}
               />

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Contato
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

