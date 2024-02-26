import { string, z } from "zod"

export const validationEditContactSchema = z.object({
  fullname: z
    .string()
    .min(3, "Nome precisa conter pelomenos 3 carácteres")
    .optional(),

  email: z
    .string()
    .email("Formato de email inválido")
    .optional(),

  phone: z
    .string()
    .min(10, "Número deve possuir no mínimo 10 digitos contando com o DDD da região.")
    .regex(/^[0-9]+$/, "Número de telefone inválido")
    .optional()
})