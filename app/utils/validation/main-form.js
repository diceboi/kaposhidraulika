import { z } from "zod";


const mailFormSchema =  z.object({
    name: z.string().min(1, "Név kitöltése kötelező"),
    email: z.string().email("Hibás email cím"),
    phone: z.string().min(1, "Telefonszám kitöltése kötelező"),
    subject: z.string().min(1, "Tárgy megadása kötelező"),
    message: z.string().min(1, "Üzenet megadása kötelező"),
    acceptance: z.boolean().refine((value) => value === true, { message: "Az adatkezelési tájékoztató elfogadás kötelező" }),
})

export default mailFormSchema;