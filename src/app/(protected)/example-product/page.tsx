"use client";
import { useTable } from "@refinedev/react-table";
import { List } from "@src/shadcn/components/crud";
import { Table } from "@src/shadcn/components/table";
import React, { useMemo } from "react";
import NextImage from "next/image";
import { getActionsColumn } from "@src/common/containers/column";
import { CardView } from "@src/shadcn/components/table/card-view";
import { getActionsRow } from "@src/common/containers/column/actionCard";
function page() {
  const { table } = useTableProduct();
  return (
    <>
      <List>
        <Table table={table}>
          <Table.Column header="name" id="name" accessorKey="name" />
          <Table.Column header="price" id="price" accessorKey="price" />
          <Table.Column header="size" id="size" accessorKey="size" />
          <Table.Column header="stock" id="stock" accessorKey="stock" />
          {ImageColumn()}
          {getActionsColumn({ resource: "product" })}
        </Table>
        <CardView table={table} className="w-[340px] h-[350px]">
          <CardView.Row header="User" id="User" accessorKey="user" isHeader={true} />
          <CardView.Row header="name" id="name" accessorKey="name"/>
          <CardView.Row header="price" id="price" accessorKey="price"/>
          <CardView.Row header="stock" id="stock" accessorKey="stock"/>
          {ImageRow()}
          {getActionsRow({ resource: "product" })}
        </CardView>
      </List>
    </>
  );
}

export function ImageRow() {
  return (
    <CardView.Row
      header="Image"
      id="image"
      accessorKey="image"
      cell={(props) => {
        const image = props.row.original.image;
        return (
          <div className="my-2">
            <NextImage
              src={image}
              alt="image"
              width={100}
              height={120}
              className="rounded-lg shadow-sm"
            />
          </div>
        );
      }}
    />
  );
}

export function ImageColumn() {
  return (
    <Table.Column
      header="Image"
      id="image"
      accessorKey="image"
      cell={(props) => {
        const image = props.row.original.image;
        return (
          <div className="my-2">
            <NextImage
              src={image}
              alt="image"
              width={100}
              height={120}
              className="rounded-lg shadow-sm"
            />
          </div>
        );
      }}
    />
  );
}

const useTableProduct = () => {
  const columns = useMemo(() => [], []);
  const table = useTable({
    columns,
    enableSorting: true,
    enableColumnFilters: true,
    refineCoreProps: {
      resource: "product",
    },
  });
  return { table };
};

export default page;
