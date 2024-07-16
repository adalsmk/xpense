import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";


interface FormFieldWrapperProps {
    label: string;
    placeholder?: string
    type?: string;
    name: string;
    disable?: boolean;
}


export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({ name, label, placeholder = "", type = "text", disable = false }) => {

    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder={placeholder} type={type} disabled={disable} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        >
        </FormField>
    );
}