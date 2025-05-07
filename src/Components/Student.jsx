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
    <div>
      <div className="card w-96 bg-slate-700 card-xs shadow-sm text-white">
        <div className="card-body">
          <h2 className="card-title">{_id}</h2>
          <p>{student_name}</p>
          <p>{email}</p>
          <p>{age}</p>
          <p>{dept}</p>
          <p>{contact_no}</p>
          <p>{gender}</p>
          <p>{section}</p>
          <p>{address}</p>
          <div className="justify-center card-actions space-x-4">
            <DeleteButton />
            <Link href={"/editStudent/123"}>
              <FaRegEdit size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
