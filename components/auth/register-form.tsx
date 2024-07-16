"use client";

import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/auth";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormFieldWrapper } from "@/components/auth/form-field-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { registar } from "@/actions/login";
import { useState, useTransition } from "react";

const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {

        setError("");
        setSuccess("")

        startTransition(() => {
            registar(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        });
    }

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            nome: "",
        },
    });

    return (
        <CardWrapper
            headerLabel="Crie uma conta"
            backButtonLabel="Já possui uma conta?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormFieldWrapper
                            name="nome"
                            label="Nome"
                            placeholder="José Maria"
                            type="text"
                            disable={isPending}
                        />
                        <FormFieldWrapper
                            name="email"
                            label="Email"
                            placeholder="maria.furtado@example.com"
                            type="email"
                            disable={isPending}
                        />
                        <FormFieldWrapper
                            name="password"
                            label="Password"
                            placeholder="********"
                            type="password"
                            disable={isPending}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button type="submit" className="w-full" disabled={isPending}>Registar</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;

