"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import MapFilter from "./component/MapFilter";
import TestComp from "./component/TestComp";

export default function Home() {
  const items = [
    {name: "name1", value: "name1", imageUrl: ""},
    {name: "name2", value: "name2", imageUrl: ""},
    {name: "name3", value: "name3", imageUrl: ""}
  ]

  const [type, setType] = useState('name1');
  useEffect(() => {
    console.log("type: ", type)
  },[type]);

  const handleChange = (type) => {
    setType(type);
  }

  const handleChange2 = useCallback(() => {
    console.log("Value: ");
  }, [])

  return (
    <>
      <MapFilter items={items} handleChange={handleChange}/>
      <TestComp handleChange2={handleChange2}/>
    </>
  );
}
