"use client"

import { Course } from "@/types/schemas/course-schema"
import { useEffect, useState } from "react"

const CourseHeader = ({id}: {id: string | string[]}) => {
  const [course, setCourse] = useState<Course | undefined>()
  
  useEffect(() => {
    fetch(`/api/courses/?course_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.course)
      })
  }, [id])
  
  return (<>{JSON.stringify(course)}</>)
}
export default CourseHeader;