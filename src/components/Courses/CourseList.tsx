"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import CourseCard from "@/components/Courses/CourseCard";
import { useRouter } from "next/navigation";
import useCourses from "@/hooks/useCourses";
import { Course } from "@/types/schemas/course-schema";

const CourseList = () => {
  const {courses} = useCourses();
  const router = useRouter();
  const isDesktopOrTablet = useMediaQuery("all and (min-width: 768px)");

  const navigateToCourse = (id: number) => {
    router.push(`/courses/${id}`);
  };

  // I was going to implement a desktop version but I ran out of time
  // return isDesktopOrTablet ? (
  //   <div>Desktop</div>

  return (
    <div className="flex flex-col gap-2">
      {courses.map((course: Course) => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={() => navigateToCourse(course.id)}
        />
      ))}
    </div>
  );
};
export default CourseList;
