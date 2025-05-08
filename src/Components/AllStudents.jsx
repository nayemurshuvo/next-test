"use client";

import { useEffect, useState } from "react";
import Student from "./Student";
// http://localhost:3000/api/student
const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/student")
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
    <div className="overflow-x-auto">
      <table className="table table-md table-zebra">
        <thead>
          <tr className="text-center text-xl">
            <th>Student Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
            <th>Section</th>
            <th>Contact No</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student key={student._id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
