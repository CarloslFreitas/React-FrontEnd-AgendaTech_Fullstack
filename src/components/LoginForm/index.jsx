import { useState } from "react"
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { StyledLoginForm } from "./style";
import { StyledText, StyledTitle1 } from "../../styles/tipography";
import { StyledButton } from "../../styles/buttons";
import { InputField } from "../InputField";
import { LoadingEfect } from "../LoadingEfect";

export const LoginForm = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false)
   const IsShowing = () => {
      setShowPassword(!showPassword);
   }

   const isEmpty = (object) => {
      return Object.keys(object).length === 0
   }


   return (
      <StyledLoginForm>
         <div className='title__form'>
            <StyledTitle1>LOGIN</StyledTitle1>
         </div>
         <InputField
            label='Email'
            labelFor='userEmail'
            id='userEmail'
            type='email'
            placeholder='Informe aqui seu email'
            helperText={''}
         />

         <InputField
            label='Senha'
            labelFor='userPassword'
            id='userPassword'
            type={showPassword ? 'text' : 'password'}
            placeholder='Digite aqui sua senha'
            helperText={''}>
            {
               showPassword
                  ? <AiFillEyeInvisible onClick={IsShowing} />
                  : <AiFillEye onClick={IsShowing} />
            }
         </InputField>

         <StyledButton buttonStyles='primary' height='48px'>
            Entrar
         </StyledButton>

         <div className='redirect__form'>
            <StyledText textStyles='headline-bold'> Ainda não possui uma conta? </StyledText>
            <Link to={'/register'}>
               <StyledButton buttonStyles='disable' height='48px'> Cadastre-se </StyledButton>
            </Link>
         </div>
      </StyledLoginForm>
   )
}