import { string, z } from "zod"

export const validationRegisterSchema = z.object({
  fullname: z
    .string()
    .nonempty("Campo Nome obrigatório.")
    .min(3, "Nome precisa conter pelomenos 3 carácteres"),

  email: z
    .string()
    .nonempty("Campo Email obrigatório.")
    .email("e-mail inválido"),

  password: z
    .string()
    .nonempty("Campo Senha obrigatório.")
    .min(8, "A senha precisa de mínimo 8 caracteres")
    .regex(/(?=.*[A-Za-z])/, "É necessário ao menos uma letra")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),

  confirmpassword: z
    .string()
    .min(1, "Confirmar senha é obrigatório"),

  phone: z
    .string()
    .nonempty("Informe um número de contato.")
    .min(10, "Número deve possuir no mínimo 10 digitos contando com o DDD da região.")
    .regex(/^[0-9]+$/, "Número de telefone inválido")

}).refine(({ password, confirmpassword }) => confirmpassword === password, {
  message: "As senhas precisam ser iguais",
  path: ["confirmpassword"]
})
