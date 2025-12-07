import React from "react";

const ToggleBtns = ({ toggle, setToggle }) => {
  let btns = ["All", "Pending", "Submited", "Reviewed"];
  return (
    <div className="font">
      <div className="text-right container mx-auto mt-5 md:mt-10 mb-5 md:mb-10">
        {btns.map((btn, ind) => {
          return (
            <button
              key={ind}
              onClick={() => setToggle(btn)}
              className={`toggleBtn ${ind === 0 && "rounded-l-lg"} ${
                ind === 3 && "rounded-r-lg border-none"
              }
              } ${toggle === btn && "!bg-purple-500 !text-white"}`}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleBtns;
