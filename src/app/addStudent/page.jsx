"use client";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const addStudent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      student_name,
      email,
      age,
      dept,
      contact_no,
      gender,
      section,
      address,
    } = data;

    const newStudent = {
      student_name,
      email,
      age,
      dept,
      contact_no,
      gender,
      section,
      address,
    };

    // console.log(newStudent);

    // send new query data to the server
    fetch("/api/student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          Swal.fire({
            title: "Success!",
            text: "New Student Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Try Again!",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error(error);
      });

    reset();
  };

  return (
    <div>
      <h1 className="font-extrabold text-4xl p-4">Create Student</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-200 p-8 space-y-6 rounded-2xl mt-2 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Student Name */}
          <div className="space-y-2 text-left">
            <label htmlFor="student_name" className="block text-lg font-bold">
              Student Name
            </label>
            <input
              type="text"
              name="student_name"
              id="student_name"
              placeholder="Enter Student Name"
              className="input input-bordered input-success w-full"
              {...register("student_name", {
                required: "Student Name is required!!",
                minLength: {
                  value: 5,
                  message: "Student name must be at least 5 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Student name must not exceed 30 characters",
                },
                pattern: {
                  value: /^[A-Z][a-zA-Z. ]*$/, // Starts with a capital letter, can use dot and space
                  message:
                    "Student name must start with a capital letter and contain only letters",
                },
              })}
            />
            {errors.student_name && (
              <span className="text-red-500 text-xs">
                {errors.student_name.message}
              </span>
            )}
          </div>

          {/* Student Email */}
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="block text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Id"
              className="input input-bordered input-success w-full"
              {...register("email", {
                required: "Email is required!!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, // must be gmail domain
                  message: "Email must be a valid Gmail address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Age */}
          <div className="space-y-2 text-left">
            <label htmlFor="age" className="block text-lg font-bold">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter the Age"
              className="input input-bordered input-success w-full"
              {...register("age", {
                required: "Age is required!!",
                min: {
                  value: 15,
                  message: "Age must be at least 15 years!",
                },
                max: {
                  value: 99,
                  message: "Age must not exceed 99 years!",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Age must be an integer number!",
                },
              })}
            />
            {errors.age && (
              <span className="text-red-500 text-xs">{errors.age.message}</span>
            )}
          </div>

          {/* Contact No */}
          <div className="space-y-2 text-left">
            <label htmlFor="contact_no" className="block text-lg font-bold">
              Contact No
            </label>
            <input
              type="text"
              name="contact_no"
              id="contact_no"
              placeholder="Enter Contact Number"
              className="input input-bordered input-success w-full"
              {...register("contact_no", {
                required: "Contact Number is required!!",
                pattern: {
                  value: /^01\d{9}$/,
                  message: "Contact number must be 11 digits and start with 01",
                },
              })}
            />
            {errors.contact_no && (
              <span className="text-red-500 text-xs">
                {errors.contact_no.message}
              </span>
            )}
          </div>

          {/* Section */}
          <div className="space-y-2 text-left">
            <label htmlFor="contact_no" className="block text-lg font-bold">
              Section
            </label>
            <input
              type="text"
              name="section"
              id="section"
              placeholder="Enter Section Name"
              className="input input-bordered input-success w-full"
              {...register("section", { required: false })}
            />
          </div>

          {/* Address */}
          <div className="space-y-2 text-left">
            <label htmlFor="address" className="block text-lg font-bold">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter the Address"
              className="input input-bordered input-success w-full"
              {...register("address", { required: false })}
            />
          </div>

          {/* Gender */}
          <div className="space-y-2 text-left flex items-center space-x-8">
            <label
              htmlFor="gender"
              className="block text-black text-lg font-bold mt-4"
            >
              Select Gender
            </label>
            <div className="flex justify-center">
              <div className="flex space-x-8 mt-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Male"
                    className="w-6 h-6"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  />
                  <p className="text-sm text-black">Male</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Female"
                    className="w-6 h-6"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  />
                  <p className="text-sm text-black">Female</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Others"
                    className="w-6 h-6"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  />
                  <p className="text-sm text-black">Others</p>
                </div>
              </div>
              <div className="ml-6">
                {errors.gender && (
                  <span className="text-sm text-red-500">
                    {errors.gender.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Department */}
          <div className="space-y-2 text-left">
            <label htmlFor="dept" className="block text-lg font-bold">
              Department Name
            </label>
            <select
              name="dept"
              id="dept"
              className="w-full select select-accent"
              {...register("dept", { required: true })}
            >
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="SWE">SWE</option>
              <option value="BBA">BBA</option>
              <option value="English">English</option>
              <option value="IPE">IPE</option>
            </select>
            {errors.dept && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full btn btn-warning font-bold text-2xl text-black hover:text-white mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default addStudent;
