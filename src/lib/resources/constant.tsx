import { UserCircle } from "lucide-react";
export const resources = [
  {
    name: "user",
    list: "/user",
    create: "/user/create",
    edit: "/user/edit/:id",
    show: "/user/show/:id",
    icon: <UserCircle />,
    meta: {
      label: "ຜູ້ໃຊ້ລະບົບ",
      order: 1,
    },
  },
  {
    name: "profile",
    list: "/profile",
    create: "/profile/create",
    edit: "/profile/edit/:id",
  },
  {
    name: "product",
    list: "/product",
    create: "/product/create",
    edit: "/product/edit/:id",
  },
];
