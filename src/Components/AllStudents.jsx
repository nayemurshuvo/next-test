"use client";

import { useEffect, useState } from "react";
import Student from "./Student";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/student")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log("Data:", data); // parsed JSON data
        setStudents(data.allStudents); // set state
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  // console.log("Test" + students);

  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {students.map((student) => (
        <Student student={student} key={student._id}></Student>
      ))}
    </div>
  );
};

export default AllStudents;
