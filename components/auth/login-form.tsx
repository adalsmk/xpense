"use client";

import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/auth";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormFieldWrapper } from "@/components/auth/form-field-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("")

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        });
    }

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <CardWrapper
            headerLabel="Bem-vindo"
            backButtonLabel="Não possui uma conta?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
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
                    <Button type="submit" className="w-full" disabled={isPending}>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default LoginForm;

