/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { validateImageSchema } from "@src/common/lib";
import { useProductContext } from "../context";

export const useBrandForm = () => {
  const { dispatch } = useProductContext();
  const { ...form } = useForm<{ id?: number }>({
    resolver: zodResolver(profileSchema()),
    defaultValues: {
      title: "Test02",
      description: "brand Nike",
      isPopular: true,
    },
    refineCoreProps: {
      resource: "brand",
      action: "create",
      redirect: "list",
      onMutationSuccess(data) {
        dispatch({ type: "setBrandId", payload: 1 });
      },
      meta: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    },
    warnWhenUnsavedChanges: true,
  });
  return { form };
};

export const profileSchema = () => {
  return z
    .object({
      title: z.string().min(1, { message: "is required" }),
      description: z.string().min(1, { message: "is required" }),
      logo: validateImageSchema({ required: true, message: "ກະລຸນາເລືອກຮູບພາບ" }),
      isPopular: z.boolean().optional(),
    });
};

