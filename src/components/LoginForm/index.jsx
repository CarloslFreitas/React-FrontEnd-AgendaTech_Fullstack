import { StyledText, StyledTitle1 } from "../../styles/tipography";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { StyledLoginForm } from "./style";
import { StyledButton } from "../../styles/buttons";
import { LoadingEfect } from "../LoadingEfect";
import { InputField } from "../InputField";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationLoginSchema } from "./validationLoginSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
   const [loading, setLoading] = useState(false);
   const { userLogin } = useContext(UserContext);
   const [showPassword, setShowPassword] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(validationLoginSchema),
   });
   const submit = async (formData) => {
      userLogin(formData, setLoading);
      reset();
   };
   const IsShowing = () => {
      setShowPassword(!showPassword);
   };
   const isEmpty = (object) => {
      return Object.keys(object).length === 0;
   };

   return (
      <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
         <div className="title__form">
            <StyledTitle1>LOGIN</StyledTitle1>
         </div>
         <InputField
            {...register("email")}
            label="Email"
            labelFor="userEmail"
            id="userEmail"
            type="email"
            placeholder="Informe aqui seu email"
            helperText={""}
            errorMessage={errors.email?.message}
         />

         <InputField
            {...register("password")}
            label="Senha"
            labelFor="userPassword"
            id="userPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui sua senha"
            errorMessage={errors.password?.message}
            helperText={""}
         >
            {showPassword ? (
               <AiFillEyeInvisible onClick={IsShowing} />
            ) : (
               <AiFillEye onClick={IsShowing} />
            )}
         </InputField>

         <StyledButton
            buttonStyles="primary"
            height="48px"
            disabled={((isEmpty(errors) ? false : true) ? true : loading)}
         >
            {loading ? <LoadingEfect /> : "Entrar"}
         </StyledButton>

         <div className="redirect__form">
            <StyledText textStyles="headline-bold">
               {" "}
               Ainda não possui uma conta?{" "}
            </StyledText>
            <Link to={"/register"}>
               <StyledButton buttonStyles="disable" height="48px">
                  {" "}
                  Cadastre-se{" "}
               </StyledButton>
            </Link>
         </div>
      </StyledLoginForm>
   );
};
