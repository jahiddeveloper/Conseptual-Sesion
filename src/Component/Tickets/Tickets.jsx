import React, { use } from "react";
import calender from "../../assets/calender.png";

const Tickets = ({ fetchTicket }) => {
  let loadTicket = use(fetchTicket);
  console.log(loadTicket);

  return (
    <div className="font container mx-auto">
      <div>
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Jahid</h1>
            <button
              className={`flex items-center gap-2 cursor-pointer px-5 py-2 rounded-4xl font-semibold bg-[#b9f8cf]`}
            >
                Hello
            </button>
          </div>
          <p className="mt-3 text-gray-500 w-full md:w-125">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam.
          </p>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 font-semibold">#10001</p>
              <p
                className={`${
                  loadTicket.priority == "HIGH PRIORITY"
                    ? "text-red-500"
                    : loadTicket.priority == "MEDIUM PRIORITY"
                    ? "text-[#febb0c]"
                    : "text-[#02a53b]"
                }`}
              >
                High priority
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p>Jahid</p>
              <div className="flex items-center gap-3">
                <img src={calender} alt="" />
                <p>20025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
