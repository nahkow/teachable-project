import { DataTable } from "../table";
import { columns } from "./columns";
import { Student } from "@/types/schemas/student-schema";

const StudentTable = ({data}: {data: Student[]}) => {
  return (
    <div className="">
      <DataTable data={data} columns={columns} />;
    </div>
  );
};
export default StudentTable;
