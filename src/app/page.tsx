"use client"

import { useEffect } from "react";
import { redirect } from 'next/navigation'

const Home = () => {
  useEffect(() =>{
    redirect('/courses')
  }, [])
  return <></>;
}

export default Home;
