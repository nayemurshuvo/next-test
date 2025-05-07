import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { FaRegEdit } from "react-icons/fa";

const Student = ({ student }) => {
  const {
    _id,
    student_name,
    email,
    age,
    dept,
    contact_no,
    gender,
    section,
    address,
  } = student;

  return (
    <tr>
      <td>{student_name}</td>
      <td>{email}</td>
      <td className="text-center">{age}</td>
      <td className="text-center">{dept}</td>
      <td className="text-center">{section}</td>
      <td className="text-center">{contact_no}</td>
      <td className="text-center">{gender}</td>
      <td className="text-center">{address}</td>
      <td>
        <FaRegEdit size={20} />
      </td>
      <td className="text-center">
        <DeleteButton />
      </td>
    </tr>
  );
};

export default Student;
