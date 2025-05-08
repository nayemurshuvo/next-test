import connectMongoDB from "../../../../libs/mongodb";
import StudentData from "../../../../model/student";
import { NextResponse } from "next/server";

// Create Student
export async function POST(request) {
  const {
    student_name,
    email,
    age,
    dept,
    contact_no,
    gender,
    section,
    address,
  } = await request.json();
  await connectMongoDB();
  await StudentData.create({
    student_name,
    email,
    age,
    dept,
    contact_no,
    gender,
    section,
    address,
  });
  return NextResponse.json({ message: "New Student Created" }, { status: 201 });
}

// Get all students
export async function GET() {
  // await connectMongoDB();
  // const allStudents = await StudentData.find();
  // console.log("Fetched students:", allStudents);
  // return NextResponse.json({ allStudents });
  try {
    await connectMongoDB();
    const allStudents = await StudentData.find();

    console.log("Fetched students:", allStudents);

    return NextResponse.json({ allStudents });
  } catch (error) {
    console.error("API Error in GET /api/student:", error);
    return NextResponse.json(
      { error: "Failed to fetch student data" },
      { status: 500 }
    );
  }
}

// Delete id wise Student
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await StudentData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: `Student ${id} deleted` },
    { status: 200 }
  );
}
