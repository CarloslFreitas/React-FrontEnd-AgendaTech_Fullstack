import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { InputField } from '../InputField';
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../providers/UserContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationEditProfileSchema } from './validationEditProfiletFormSchema';

export const ModalEditProfile = ({ closeEditProfileModal }) => {

   const { editProfile } = useContext(UserContext)

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(validationEditProfileSchema)
   })

   const submit = async (formData) => {
      await editProfile(formData, closeEditProfileModal)

      console.log(formData);
   }

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

            <form onSubmit={handleSubmit(submit)}>
               <InputField
                  {...register('fullname', { optional: true })}
                  label='Nome'
                  labelFor='userName'
                  id='userName'
                  type='text'
                  placeholder='Seu nome (Opcional)'
                  helperText={''}
                  errorMessage={errors.fullname?.message}
               />
               <InputField
                  {...register('email', { optional: true })}
                  label='Email'
                  labelFor='userEmail'
                  id='userEmail'
                  type='email'
                  placeholder='Email de contato (Opcional)'
                  helperText={''}
                  errorMessage={errors.email?.message}
               />
               <InputField
                  {...register('phone', { optional: true })}
                  label='Telefone'
                  labelFor='userPhone'
                  id='userPhone'
                  type='text'
                  placeholder='seu telefone (Opcional)'
                  helperText={''}
                  errorMessage={errors.phone?.message}
               />

               <StyledButton buttonStyles='primary' height='48px'>
                  Salvar Alterações
               </StyledButton>
            </form>
         </div>
      </StyledModal>
   )
}

