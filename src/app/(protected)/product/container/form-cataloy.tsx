import React from "react";
import { Form } from "@src/shadcn/components/form";
import { Input } from "@src/shadcn/elements";
import { useBrandForm } from "./hook";

export const BrandForm: React.FC<any> = () => {
  const { form } = useBrandForm();
  return (
    <div className="rounded-full w-96 sm:w-[710px]  ">
      <Form {...form}>
        <Form.Field {...form} label={"title"} name={"title"} require={false}>
          <Input className="w-full" placeholder="name" />
        </Form.Field>
        <Form.Field {...form} label={"description"} name={"description"} require={false}>
          <Input className="w-full" placeholder="description" />
        </Form.Field>
        <Form.Field {...form} name="logo" require={false}>
          <Form.FileInputImage className="w-64 h-64 pt-1 rounded-none" />
        </Form.Field>
        <Form.Field {...form} name={"isPopular"} label={"type"}>
          <Form.RadioGroup className="" options={[
            { label: "true", value: true },
            { label: "false", value: false },
          ]} isSquare={true} />
        </Form.Field>
      </Form>
    </div>
  );
};
