"use client";

import { useList } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { getActionsColumn } from "@src/common/containers/column";
import { List } from "@src/shadcn/components/crud";
import { Table } from "@src/shadcn/components/table";
import React, { useMemo } from "react";

function page() {
  const { table } = useTableProfile();
  console.log("table.options.data", table.options.data);
  const districtIds = getDistrict(table.options.data);
  console.log("districtIds", districtIds);
  const { data: districtData } = useList({
    resource: "district",
    filters: [
      { field: "id", operator: "eq", value: districtIds },
    ],
  });
  console.log("districtData", districtData?.data);

  function getDistrict(val: any) {
    const districts = val.map((item: any) => item.district);
    return districts.join(",");
  }
  return (
    <div>
      <List>
        <Table table={table}>
          <Table.Column header="fullname" id="fullname" accessorKey="fullname" />
          <Table.Column header="nickname" id="nickname" accessorKey="nickname" />
          <Table.Column header="gender" id="gender" accessorKey="gender" />
          <Table.Column header="phone" id="phone" accessorKey="phone" />
          <Table.Column header="District" id="District" accessorKey="District"
            cell={((props) => {
              console.log("row district", props.row.original.district);
              const districtId = props.row.original.district;
              const findDistrict = districtData?.data.find((item) => item.id === districtId);
              console.log("findDistrict,", findDistrict);
              return <>{findDistrict?.districtName}</>;
            })}
          />
          <Table.Column header="province" id="District" accessorKey="District"
            cell={((props) => {
              const districtId = props.row.original.district;
              const findDistrict = districtData?.data.find((item) => item.id === districtId)?.provinceName ?? "";
              return <>{findDistrict}</>;
            })}
          />
          {getActionsColumn({ resource: "profile" })}
        </Table>
      </List>
    </div>
  );
}

export default page;

const useTableProfile = () => {
  const columns = useMemo(() => [], []);
  const table = useTable({
    columns,
    enableSorting: true,
    enableColumnFilters: true,
    refineCoreProps: {
      resource: "profile",
    },
  });
  return { table };
};
