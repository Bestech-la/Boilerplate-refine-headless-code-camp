import React from "react";
import { useFormProfile } from "./hook";
import { Input } from "@src/shadcn/elements";
import { Form } from "@/shadcn/components/form";
import { useSelect } from "@refinedev/core";
function ProfileForm() {
  const { form } = useFormProfile();
  const district = useDistrictSelect();
  return (
    <div className=" w-full sm:w-[850px] mx-auto">
      <Form {...form}>
        <div className="w-64 m-auto">
          <Form.Field name="image" {...form} label="" require={false}>
            <Form.FileInputImage />
          </Form.Field>
        </div>
        <div className="flex gap-1">
          <div className="w-1/2">
            <Form.Field name="fullname" {...form} label="fullname">
              <Input className="w-full"/>
            </Form.Field>
          </div>
          <div className="w-1/2">
            <Form.Field name="nickname" {...form} label="nickname">
              <Input className="w-full"/>
            </Form.Field>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-1/2">
            <Form.Field name="age" {...form} label="age">
              <Input type="number" />
            </Form.Field></div>
          <div className="w-1/2">
            <Form.Field name="phone" {...form} label="phone">
              <Input type="number" />
            </Form.Field></div>
        </div>
        <div className="w-1/2">
          <Form.Field name="district" {...form} label="district">
            <Form.Combobox {...district} className="w-full"/>
          </Form.Field>
        </div>
        <div className="w-1/2">
          <Form.Field name="birthday" {...form} label="gender">
            <Form.DatePicker />
          </Form.Field>
        </div>
        <Form.Field name="gender" {...form} label="gender">
          <Form.RadioGroup options={[{ value: "MALE", label: "male" }, { value: "FEMALE", label: "female" }]} />
        </Form.Field>
      </Form>
    </div>
  );
}

const useDistrictSelect = () => {
  const districtSelect = useSelect({
    resource: "district",
    optionLabel: "districtName",
    optionValue: "id",
    filters: [
      { operator: "eq", field: "paginate", value: false },
    ],
  });
  return districtSelect;
};
export default ProfileForm;
