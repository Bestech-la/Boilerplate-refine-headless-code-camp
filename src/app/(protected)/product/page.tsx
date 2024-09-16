"use client";

import StepperContainer from "@src/common/components/stepForm";
import { Create } from "@src/shadcn/components/crud";
import React from "react";
import { BrandForm } from "./container/form-cataloy";
import { ProductForm } from "./container/form-product";
import { createProduct, ProductProvider } from "./context";

function Product() {
  const steps = [
    {
      label: "Form Category",
      value: <BrandForm/>,
    },
    {
      label: "Form Product",
      value: <ProductForm/>,
    },
  ];
  return (
    <Create>
      <ProductProvider storageKeys={createProduct}>
        <StepperContainer steps={steps} initialStep={0}/>
      </ProductProvider>
    </Create>
  );
}

export default Product;
