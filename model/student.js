import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    student_name: String,
    email: String,
    age: Number,
    dept: String,
    contact_no: String,
    gender: String,
    section: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

const StudentData =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default StudentData;
