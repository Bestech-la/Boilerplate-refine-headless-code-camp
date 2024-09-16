import React from "react";
import { DatePickerField } from "@src/shadcn/components/form/datepicker";
import { Form } from "@src/shadcn/components/form";
import { Input } from "@src/shadcn/elements";
import { useSelect } from "@refinedev/core";
import { useProductForm } from "../../example-product/hook";

export const ProductForm: React.FC<any> = ({ id, action }) => {
  const { form } = useProductForm({ action, id });
  const district = useBrandSelect();
  return (
    <div className="rounded-full w-96 sm:w-[710px]  ">
      <Form {...form}>
        <Form.Field {...form} name="image" require={false}>
          <Form.FileInputImage className="w-64 h-64 pt-1 rounded-full" />
        </Form.Field>
        <div className="flex flex-wrap gap-2">
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"name"} name={"name"} require={false}>
                <Input className="w-full" placeholder="name" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"price"} name={"price"} require={false}>
                <Input className="w-full" placeholder="price" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"size"} name={"size"} require={false}>
                <Input className="w-full" placeholder="23" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"stock"} name={"stock"} require={false}>
                <Input className="w-full" placeholder="stock" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name="brand" label="brand">
                <Form.Combobox
                  {...(district as any)}
                  className="lg:w-80"
                />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name="dateAdded" label="dateAdded">
                <DatePickerField />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name={"type"} label={"type"}>
                <Form.RadioGroup className="" options={[
                  { label: "Electric", value: "Electric" },
                  { label: "Clothing", value: "Clothing" },
                  { label: "Furniture", value: "Furniture" }]} isSquare={true} />
              </Form.Field>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const useBrandSelect = () => {
  const position = useSelect({
    resource: "brand",
    optionLabel: "title",
    optionValue: "id",
    filters: [
      { field: "paginate", operator: "eq", value: false },
    ],
  });
  return position;
};

