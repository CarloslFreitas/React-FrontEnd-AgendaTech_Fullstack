import { string, z } from "zod"

export const validationFormSchema = z.object({
  name: z
    .string()
    .nonempty("Campo Nome obrigatório.")
    .min(2, "Nome precisa conter pelomenos 2 carácteres"),

  email: z
    .string()
    .nonempty("Campo Email obrigatório.")
    .email("e-mail inválido"),

  password: z
    .string()
    .nonempty("Campo Senha obrigatório.")
    .min(8, "A senha precisa de mínimo 8 caracteres")
    .regex(/(?=.*[A-Za-z])/, "É necessário ao menos uma letra")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caráctere especial")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),

  confirm: z
    .string()
    .min(1, "Confirmar senha é obrigatório"),

  bio: z
    .string()
    .nonempty("Escreva algo sobre você.")
    .min(10, "Bio precisa conter pelomenos 10 carácteres"),

  contact: z
    .string()
    .nonempty("Informe qualquer meio de contato."),

  course_module: z
    .string()
    .nonempty('Obrigatório selecionar uma opção'),

}).refine(({password, confirm}) => confirm === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"]
})
