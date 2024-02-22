import { StyledTitle3 } from '../../styles/tipography'
import { StyledButton } from '../../styles/buttons'
import { StyledModal } from './style';
import { SelectField } from '../../components/SelectField'

import { InputField } from '../InputField'
import { LoadingEfect } from '../LoadingEfect';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TechListContext } from '../../providers/techListContext';
import { zodResolver } from '@hookform/resolvers/zod'
import { validationTechsSchema } from './validationTechsSchema';

export const ModalTechsRegister = ({ closeModal }) => {

   const [loading, setLoading] = useState(false)
   const modalRef = useRef(null)
   const buttonRef = useRef(null)
   const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: zodResolver(validationTechsSchema)
   })

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

   const { newTech } = useContext(TechListContext)

   const submit = (formData) => {
      newTech(formData, setLoading, closeModal)
      reset()
   }

   return (
      <StyledModal>
         <div className="modal-content" ref={modalRef} >

            <div className='modal-header'>
               <StyledTitle3>Cadastrar Tecnologia</StyledTitle3>
               <span className='closeModal' ref={buttonRef} onClick={closeModal}> X </span>
            </div>

            <form onSubmit={handleSubmit(submit)}>

               <InputField
                  {...register('title')}
                  label='Nome'
                  labelFor='techName'
                  id='techName'
                  type='text'
                  placeholder='Digite a tecnologia'
                  helperText={''}
                  errorMessage={errors.title?.message}
               />

               <SelectField
                  {...register('status')}
                  label='Selecionar status'
                  errorMessage={errors.status?.message}>
                  <option value=''>Selecionar Nível</option>
                  <option value='Iniciante'>Iniciante</option>
                  <option value='Intermediário'>Intermediário</option>
                  <option value='Avançado'>Avançado</option>
               </SelectField>

               <StyledButton disabled={loading} buttonStyles='primary' height='48px'>
                  {loading ? <LoadingEfect /> : 'Salvar Tecnologia'}
               </StyledButton>

            </form>
         </div>
      </StyledModal>
   )
}

