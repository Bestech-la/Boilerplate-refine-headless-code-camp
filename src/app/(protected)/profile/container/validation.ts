import { validateDateSchema, validateImageSchema } from "@src/common/lib";
import * as z from "zod";

export const profileShema = z
  .object({
    fullname: z.string().min(2, {
      message: "fullname is required",
    }),
    nickname: z.string().min(2, {
      message: "nickname is required",
    }),
    phone: z.string().min(2, {
      message: "phone is required",
    }),
    age: z.number().or(z.string().min(1, { message: "ກະລຸນາປ້ອນອາຍຸ" })),
    district: z.number().min(2, {
      message: "district is required",
    }),
    birthday: validateDateSchema({ message: "ກະລຸນາເລືອກຮູບພາບ" }),
    image: validateImageSchema({ required: true, message: "ກະລຸນາເລືອກຮູບພາບ" }),
  }).transform((val) => {
    if (val.image === undefined || typeof val.image === "string") {
      delete val.image;
    }
    return val;
  });
