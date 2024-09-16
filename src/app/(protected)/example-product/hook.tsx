/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateDateSchema, validateImageSchema } from "@common/lib/validation/validationFormUtils";
import { type FormAction } from "@refinedev/core";
import { z } from "zod";

export const useProductForm = ({ action, id }: { id?: number, action: FormAction }) => {
  const { ...form } = useForm<{ id?: number }>({
    resolver: zodResolver(profileSchema()),
    defaultValues: {
      name: "",
      price: "",
      size: "",
      stock: "",
      brand: "",
      type: "",
      dateAdded: "",
      image: undefined,
    },
    refineCoreProps: {
      resource: "product",
      action,
      id,
      redirect: "list",
      meta: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
      successNotification: () => {
        return { message: "ສ້າງຂໍ້ມູນສ່ວນບຸກຄົນ", type: "success" };
      },
    },
    warnWhenUnsavedChanges: true,
  });
  return { form };
};

export const profileSchema = () => {
  return z
    .object({
      name: z.string().min(1, { message: "ກະລຸນາໃສ່ຊື່ແທ້ ແລະ ນາມສະກຸນ" }),
      price: z.string().min(1, { message: "nickname is required" }),
      size: z.number().or(z.string().min(1, { message: "ກະລຸນາປ້ອນອາຍຸ" })),
      stock: z.number().or(z.string().min(1, { message: "ກະລຸນາປ້ອນອາຍຸ" })),
      brand: z.number().min(1, { message: "ກະລຸນາເລືອກເພດ" }),
      type: z.string().min(1, { message: "ກະລຸນາເລືອກເພດ" }),
      image: validateImageSchema({ required: true, message: "ກະລຸນາເລືອກຮູບພາບ" }),
      dateAdded: validateDateSchema({ message: "ກະລຸນາເລືອກເມືອງ" }),
    }).transform((val) => {
      if (val.image === undefined || typeof val.image === "string") {
        delete val.image;
      }
      return val;
    });
};

