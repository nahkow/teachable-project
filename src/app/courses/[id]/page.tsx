"use client";

import StudentTable from "@/components/StudentTable";
import useStudents from "@/hooks/useStudents";
import { Student } from "@/types/schemas/student-schema";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseHeader from "./CourseHeader";

const CourseEnrollment = () => {
  const params = useParams();
  const { getStudentsEnrolledByCourseId } = useStudents();
  const [studentsEnrolled, setStudentsEnrolled] = useState<Student[]>([]);

  useEffect(() => {
    getStudentsEnrolledByCourseId(params.id as string).then((res) => {
      setStudentsEnrolled(res)
    }
    );
  }, [params.id]);

  return (  
    <>
      {/* <CourseHeader id={params.id} /> */}
      <StudentTable data={studentsEnrolled}/>
    </>
  );
};

export default CourseEnrollment;
