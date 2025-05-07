import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import StudentData from "../../../../../model/student";

// Update API
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newStudentName: student_name,
    newEmail: email,
    newAge: age,
    newDept: dept,
    newContact: contact_no,
    newGender: gender,
    newSection: section,
    newAddress: address,
  } = await request.json();
  await connectMongoDB();
  await StudentData.findByIdAndUpdate(id, {
    student_name,
    email,
    age,
    dept,
    contact_no,
    gender,
    section,
    address,
  });
  return NextResponse.json({ message: "Student Updated" }, { status: 200 });
}

// Get id wise Student API
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const singleStudent = await StudentData.findOne({ _id: id });
  return NextResponse.json({ singleStudent }, { status: 200 });
}
