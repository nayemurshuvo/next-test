"use client";
import Swal from "sweetalert2";
import { RiDeleteBin5Fill } from "react-icons/ri";

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const userResponse = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (userResponse.isConfirmed) {
        const res = await fetch(`/api/student?id=${id}`, {
          method: "DELETE",
        });
        if (res.status == 200) {
          Swal.fire({
            title: "Deleted!",
            text: "This data has been deleted.",
            icon: "success",
          });

          //UI Update
          onDelete(id);
        }
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Query is not deleted",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the item.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-xs btn-error text-white">
      <RiDeleteBin5Fill size={15} />
    </button>
  );
};

export default DeleteButton;
