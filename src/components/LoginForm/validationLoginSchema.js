import { string, z } from "zod"

export const validationLoginSchema = z.object({
    email: z
        .string()
        .nonempty("Campo email obrigatório")
        .email("e-mail inválido"),

    password: z
        .string()
        .nonempty("Campo senha obrigatório")
        .min(8,"Campo senha obrigatório"),
})