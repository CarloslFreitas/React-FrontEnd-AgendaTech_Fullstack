// import { StyledRegisterForm } from './style'
import { StyledButton } from '../../styles/buttons'
import { StyledTitle1 } from '../../styles/tipography'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useContext } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { InputField } from '../InputField'
import { StyledRegisterForm } from './style'
import { validationRegisterSchema } from './validationFormSchema'
import { UserContext } from '../../providers/UserContext'


export const RegisterForm = () => {

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: zodResolver(validationRegisterSchema)
   });

   const { creatUser } = useContext(UserContext)

   const submit = async (FormData) => {
      console.log(FormData);
      creatUser(FormData)
      reset();
   }

   const [showPassword, setShowPassword] = useState(false)

   const [showConfirm, setShowConfirm] = useState(false)

   const IsShowingPass = () => {
      setShowPassword(!showPassword);
   }

   const IsShowingConfi = () => {
      setShowConfirm(!showConfirm);
   }

   return (

      <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate >

         <div>
            <StyledTitle1>Crie sua conta</StyledTitle1>
         </div>

         <InputField
            {...register('fullname')}
            label='Nome'
            labelFor='userName'
            id='userName'
            type='text'
            placeholder='Digite aqui seu nome'
            helperText={''}
            errorMessage={errors.fullname?.message}
         />
         <InputField
            {...register('email')}
            label='Email'
            labelFor='userEmail'
            id='userEmail'
            type='email'
            placeholder='Digite aqui seu email'
            helperText={''}
            errorMessage={errors.email?.message}
         />
         <InputField
            {...register('phone')}
            label='Telefone'
            labelFor='userPhone'
            id='userPhone'
            type='text'
            placeholder='Digite aqui seu Telefone'
            helperText={''}
            errorMessage={errors.phone?.message}
         />
         <InputField
            {...register('password')}
            label='Senha'
            labelFor='userPassword'
            id='userPassword'
            type={showPassword ? 'text' : 'password'}
            placeholder='Digite aqui sua senha'
            helperText={''}
            errorMessage={errors.password?.message}
         >
            {
               showPassword
                  ? <AiFillEyeInvisible onClick={IsShowingPass} />
                  : <AiFillEye onClick={IsShowingPass} />
            }
         </InputField>

         <InputField
            {...register('confirmpassword')}
            label='Confirmar Senha'
            labelFor='confirmPassword'
            id='confirmPassword'
            type={showConfirm ? 'text' : 'password'}
            errorMessage={errors.confirmpassword?.message}
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