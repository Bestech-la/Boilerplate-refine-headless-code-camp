import React from "react";
import { DatePickerField } from "@src/shadcn/components/form/datepicker";
import { Form } from "@src/shadcn/components/form";
import { Input } from "@src/shadcn/elements";
import { useProfileForm } from "./useProfileForm";
import { useSelect } from "@refinedev/core";

export const ProfileForm: React.FC<any> = ({ id, action }) => {
  const { form } = useProfileForm({ action, id });
  const district = useDistrictSelect();
  return (
    <div className="rounded-full w-96 sm:w-[710px]  ">
      <Form {...form}>
        <Form.Field {...form} name="image" require={false}>
          <Form.FileInputImage className="w-64 h-64 pt-1 rounded-full" />
        </Form.Field>
        <div className="flex flex-wrap gap-2">
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"ຊື່​ ແລະ ນາມ​ສະ​ກຸນ"} name={"fullname"} require={false}>
                <Input className="w-full" placeholder="ທະວີສຸກ ມີນາລາວົງ" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"ຊື່ຫຼື້ນ"} name={"nickname"} require={false}>
                <Input className="w-full" placeholder="ເປີ້ນ" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"age"} name={"age"} require={false}>
                <Input className="w-full" placeholder="23" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} label={"ເບີໂທ"} name={"phone"} require={false}>
                <Input className="w-full" placeholder="20XXXXXXXX" />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name="district" label="ເມືອງ">
                <Form.Combobox
                  {...(district as any)}
                  className="lg:w-80"
                />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name="birthday" label="ວັນ​ເດືອນ​ປີ​ເກີດ">
                <DatePickerField />
              </Form.Field>
            </div>
          </div>
          <div className="w-80">
            <div className="w-full mb-3">
              <Form.Field {...form} name={"gender"} label={"ເພດ"}>
                <Form.RadioGroup className="" options={[
                  { label: "ຊາຍ", value: "MALE" },
                  { label: "ຍິງ", value: "FEMALE" }]} isSquare={true} />
              </Form.Field>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const useDistrictSelect = () => {
  const position = useSelect({
    resource: "district",
    optionLabel: "districtName",
    optionValue: "id",
    filters: [
      { field: "paginate", operator: "eq", value: false },
    ],
  });
  return position;
};

