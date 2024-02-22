import { string, z } from "zod";
 
export const validationTechsSchema = z.object ({
    title: z.string().nonempty('O campo não pode estar vazio'),
    status: z.string().nonempty('Selecione uma opção válida'),
})

