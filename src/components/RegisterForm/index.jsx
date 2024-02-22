// import { StyledRegisterForm } from './style'
import { StyledButton } from '../../styles/buttons'
import { StyledText, StyledTitle1 } from '../../styles/tipography'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { validationFormSchema } from './validationFormSchema'

import { useState, useContext } from 'react'
import { LoadingEfect } from '../LoadingEfect'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { InputField } from '../InputField'
import { StyledRegisterForm } from './style'


export const RegisterForm = () => {

   const [showPassword, setShowPassword] = useState(false)

   const [showConfirm, setShowConfirm] = useState(false)

   const IsShowingPass = () => {
      setShowPassword(!showPassword);
   }

   const IsShowingConfi = () => {
      setShowConfirm(!showConfirm);
   }

   return (

      <StyledRegisterForm>

         <div>
            <StyledTitle1>Crie sua conta</StyledTitle1>
         </div>

         <InputField
            label='Nome'
            labelFor='userName'
            id='userName'
            type='text'
            placeholder='Digite aqui seu nome'
            helperText={''}
         />
         <InputField
            label='Email'
            labelFor='userEmail'
            id='userEmail'
            type='email'
            placeholder='Digite aqui seu email'
            helperText={''}
         />
         <InputField
            label='Telefone'
            labelFor='userPhone'
            id='userPhone'
            type='text'
            placeholder='Digite aqui seu Telefone'
            helperText={''}
         />
         <InputField
            label='Senha'
            labelFor='userPassword'
            id='userPassword'
            type={showPassword ? 'text' : 'password'}
            placeholder='Digite aqui sua senha'

            helperText={''}
         >
            {
               showPassword
                  ? <AiFillEyeInvisible onClick={IsShowingPass} />
                  : <AiFillEye onClick={IsShowingPass} />
            }
         </InputField>

         <InputField
            label='Confirmar Senha'
            labelFor='confirmPassword'
            id='confirmPassword'
            type={showConfirm ? 'text' : 'password'}
            placeholder='Digite novamente sua senha'>
            {
               showConfirm
                  ? <AiFillEyeInvisible onClick={IsShowingConfi} />
                  : <AiFillEye onClick={IsShowingConfi} />
            }
         </InputField>

         <StyledButton buttonStyles='primary' height='48px'>
            Cadastrar
         </StyledButton>

      </StyledRegisterForm>
   )
}