// "use client";

// import { useEffect, useState } from "react";

const contact = () => {
  // const [name, setName] = useState();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedName = localStorage.getItem("name");
  //     if (storedName) {
  //       setName(storedName);
  //     }
  //   }
  // }, []);

  // const handleNameChange = (event) => {
  //   const newName = event.target.value;
  //   setName(newName);
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("name", newName);
  //   }
  // };

  return (
    <div>
      <h1 className="text-4xl">This is Contact Page</h1>
      {/* <div>
        <h1>Welcome, {name || "User Name"}</h1>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div> */}
    </div>
  );
};

export default contact;
