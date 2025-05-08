"use client";

import { useEffect, useState } from "react";
import Student from "./Student";
// http://localhost:3000/api/student
const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/student", {
      cache: "no-store",
    })
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

  // const handleDeleteFromList = (id) => {
  //   setStudents((std) => std.filter((student) => student._id !== id));
  // };

  const handleDeleteFromList = (deletedId) => {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student._id !== deletedId)
    );
  };

  // console.log("Test" + students);

  return (
    <div className="overflow-x-auto">
      <table className="table table-md table-zebra">
        <thead>
          <tr className="text-center text-xl font-bold text-black">
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
            <Student
              key={student._id}
              student={student}
              onDelete={handleDeleteFromList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
