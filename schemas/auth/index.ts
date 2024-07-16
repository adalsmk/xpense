import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório"
    }),
    password: z.string().min(1, {
        message: "Password é obrigatório"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório"
    }),
    password: z.string().min(6, {
        message: "Minímo 6 caracteres"
    }),
    nome: z.string().min(2, {
        message: "Nome é obrigatório"
    }),
});