import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/types/schemas/course-schema";
import { Button } from '@/components/ui/button';

const Course = ({ course, onClick }: { course: Course, onClick: () => void}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription> {course.heading}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={onClick}> View Students</Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
