import { NextResponse } from "next/server";

const createPath = (id?: string) =>
  `https://developers.teachable.com/v1/courses${id ? "/" + id : ""}`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("course_id");
  if (id === null) {
    return fetchAllCourses();
  }
  return fetchCourse(id);
}

const fetchAllCourses = async () => {
  const res = await fetch(createPath(), {
    headers: {
      "Content-Type": "application/json",
      apiKey: process.env.DATA_API_KEY || "",
    },
  });
  const data = await res.json();

  return NextResponse.json({ courses: data.courses });
};

const fetchCourse = async (id: string) => {
  // return NextResponse.json({ string: createPath(id)})
  const res = await fetch(createPath(id), {
    headers: {
      "Content-Type": "application/json",
      apiKey: process.env.DATA_API_KEY || "",
    },
  });
  const data = await res.json();

  return NextResponse.json({ course: data.course });
};
