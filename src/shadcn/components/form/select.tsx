"use client";

import type {
    Content as SelectContentType,
    SelectProps as SelectCoreProps,
} from "@radix-ui/react-select";
import { BaseOption } from "@refinedev/core";
import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import {
    FormControl,
    SelectContent,
    SelectItem,
    SelectTrigger,
    Select as SelectUI,
    SelectValue,
} from "../../elements";

type SelectProps = SelectCoreProps & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string) => void;
    options?: BaseOption[];
    className?: string
};

export const Select = forwardRef<
    React.ElementRef<typeof SelectContentType>,
    SelectProps
>(({ className, ...props }, ref) => {
    return (
        <SelectUI
            disabled={props.options?.length === 0}
            onValueChange={props.onChange}
            defaultValue={props.value}
            value={props.value}
        >
            <FormControl>
                <SelectTrigger className={cn("w-full my-2 ", className)}>
                    <SelectValue placeholder={props.value ?? "ເລືອກ"} />
                </SelectTrigger>
            </FormControl>
            <SelectContent className={cn("w-full overflow-y-scroll", className)} ref={ref}>
                {props.options?.map((option, key: number) => (
                    <SelectItem key={key} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectUI>
    );
});

Select.displayName = "Select";


export { SelectContent };
