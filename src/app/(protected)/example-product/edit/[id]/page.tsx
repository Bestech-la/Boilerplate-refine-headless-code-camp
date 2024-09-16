"use client";

import { Edit } from "@src/shadcn/components/crud";
import React from "react";
import { ProductForm } from "../../../product/container/form-product";

const ProfileEdit = () => {
  return (
    <div>
      <Edit>
        <ProductForm />
      </Edit>
    </div>
  );
};

export default ProfileEdit;
