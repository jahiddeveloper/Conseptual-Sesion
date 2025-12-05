import React from "react";

const ToggleBtns = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="text-right container mx-auto mt-5 md:mt-10 mb-5 md:mb-10">
        <button
          onClick={() => setToggle("All")}
          className={`toggleBtn rounded-l-lg ${
            toggle === "All" && "!bg-purple-500 !text-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setToggle("Pending")}
          className={`toggleBtn ${
            toggle === "Pending" && "!bg-purple-500 !text-white"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setToggle("Submited")}
          className={`toggleBtn ${
            toggle === "Submited" && "!bg-purple-500 !text-white"
          }`}
        >
          Submited
        </button>

        <button
          onClick={() => setToggle("Reviewed")}
          className={`toggleBtn border-none rounded-r-lg ${
            toggle === "Reviewed" && "!bg-purple-500 !text-white"
          }`}
        >
          Reviewed
        </button>
      </div>
    </div>
  );
};

export default ToggleBtns;
