import { NextResponse } from "next/server";

const createPath = (courseId: string) =>
  `https://developers.teachable.com/v1/courses/${courseId}/enrollments`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("course_id");
  const res = await fetch(createPath(id), {
    headers: {
      "Content-Type": "application/json",
      apiKey: process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ enrollments: data.enrollments });
}
