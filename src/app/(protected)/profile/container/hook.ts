/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileShema } from "./validation";

export const useFormProfile = () => {
  const form = useForm<{ id: number }>({
    resolver: zodResolver(profileShema),
    defaultValues: { fullname: "", nickname: "", age: "", phone: "", gender: "", birthday: "", image: undefined, district: 0 },
    refineCoreProps: {
      resource: "profile",
      redirect: "list",
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
