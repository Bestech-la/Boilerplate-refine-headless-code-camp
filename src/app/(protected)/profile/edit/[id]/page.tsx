"use client";
import { Edit } from "@src/shadcn/components/crud";
import React from "react";
import ProfileForm from "../../container/form";

function page() {
  return (
    <Edit><ProfileForm /></Edit>
  );
}

export default page;
