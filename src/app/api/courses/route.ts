import { NextResponse } from "next/server";

const createPath = () => "https://developers.teachable.com/v1/courses"

export async function GET(){
  
  const res = await fetch(createPath(), {
    headers: {
      'Content-Type': 'application/json',
      'apiKey': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ courses: data.courses })

}

