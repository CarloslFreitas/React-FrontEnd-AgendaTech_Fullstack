import { string, z } from "zod"

export const validationAddContactSchema = z.object({
  fullname: z
    .string()
    .nonempty("Campo Nome obrigatório.")
    .min(3, "Nome precisa conter pelomenos 3 carácteres"),

  email: z
    .string()
    .nonempty("Campo Email obrigatório.")
    .email("Formato de email inválido"),

  phone: z
    .string()
    .nonempty("Informe um número de contato.")
    .min(10, "Número deve possuir no mínimo 10 digitos contando com o DDD da região."),

})