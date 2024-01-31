"use client"

import { CourseList } from "@/components/Courses";
import { useEffect, useState } from "react";
import useCourses from "@/hooks/useGetCourses";

const Courses = () => {
  const {courses} = useCourses();
  
 return (<CourseList courses={courses}></CourseList>)
}

export default Courses;