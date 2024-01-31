"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import CourseCard from "@/components/Courses/CourseCard";
import { Course } from "@/types/schemas/course-schema";
import { useRouter } from "next/navigation";

const CourseList = ({ courses }: { courses: Course[] }) => {
  const isDesktopOrTablet = useMediaQuery("all and (min-width: 768px)");
  const router = useRouter();

  const navigateToCourse = (id: number) => {
    router.push(`/courses/${id}`);
  };

  // I was going to implement a desktop version but I ran out of time
  // return isDesktopOrTablet ? (
  //   <div>Desktop</div>

  return (
    <div className="flex flex-col gap-2">
      {courses.map((course) => (
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
