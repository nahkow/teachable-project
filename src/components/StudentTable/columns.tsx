"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Student } from "../../types/schemas/student-schema"
import { DataTableColumnHeader } from "../table/data-table-column-header"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Student>[] = [
 
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (<div className="w-[80px]">{row.getValue("name")}</div>),
    enableSorting: true,
    enableHiding: false,
    filterFn: (row, id, value) => {
      console.log(id, value)
      return JSON.stringify(row.getValue("name")).toLowerCase().includes(value.toLowerCase());
    },
  }, 
  {
    accessorKey: "email", 
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      console.log(row.getValue("email"))
    return (<div className="w-[80px]">{row.getValue("email")}</div>)},
    enableSorting: true,
    enableHiding: false,
    // Will email filter this if enough time 
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  }, 
]

