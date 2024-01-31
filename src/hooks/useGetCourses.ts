"use client"

import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCourses(data.courses)
      })
  }, [])

  return {courses}
}

export default useCourses;