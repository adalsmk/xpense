"use server";

import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import * as z from "zod";

function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}


export const login = async (values: z.infer<typeof LoginSchema>) => {

    // await sleep(800);
    const data = LoginSchema.safeParse(values);

    if (!data.success) {
        return { error: "Parâmetros inválidos" };
    }

    return { success: "Formulário submetido com sucesso" };
}

export const registar = async (values: z.infer<typeof RegisterSchema>) => {

    // await sleep(900);
    const data = RegisterSchema.safeParse(values);

    if (!data.success) {
        return { error: "Parâmetros inválidos" };
    }

    return { success: "Formulário submetido com sucesso" };
}