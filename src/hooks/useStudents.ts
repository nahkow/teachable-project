"use client";

import { useEffect, useState } from "react";
import { Student } from "@/types/schemas/student-schema";

const useStudents = () => {
  const getStudentsEnrolledByCourseId = async (
    id: string
  ): Promise<Student[]> => {
    console.log(`/api/courses/enrollments/?course_id='${id}`);
    const res = await fetch(`/api/courses/enrollments/?course_id=${id}`).then(
      (res) => res.json()
    );
    const studentsRes = await fetch("/api/students").then((res) => res.json());
    return res.enrollments.map(({ user_id }: { user_id: string }) =>
      studentsRes.students.find((student: Student) =>
        student.id.toString().match(user_id)
      )
    );
  };

  return { getStudentsEnrolledByCourseId };
};

export default useStudents;
