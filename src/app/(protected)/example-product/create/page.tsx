"use client";
import React from "react";
import { Create } from "@/shadcn/components/crud";
import { ProductForm } from "../../product/container/form-product";

export default function ProfileCreate(): JSX.Element {
  return (
    <Create>
      <div className="flex justify-center">
        <div className="flex flex-col border rounded-2xl">
          <div className="w-full p-5 text-2xl font-bold text-center border text-primary-foreground bg-primary border-border rounded-t-2xl">
            ສ້າງໂປຣໄຟລ໌
          </div>
          <ProductForm action="create"/>
        </div>
      </div>
    </Create>
  );
}
