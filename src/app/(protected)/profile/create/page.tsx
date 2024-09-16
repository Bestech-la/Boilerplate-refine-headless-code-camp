"use client";

import { Create } from "@src/shadcn/components/crud";
import React from "react";
import ProfileForm from "../container/form";

function page() {
  return (
    <Create>
      <div><ProfileForm/></div>
    </Create>
  );
}

export default page;
