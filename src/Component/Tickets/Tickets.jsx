import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ fetchTicket }) => {
  let loadTicket = use(fetchTicket);

  return (
    <div className="font container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {loadTicket.map((ticket) => (
        <Ticket ticket={ticket}></Ticket>
      ))}
    </div>
  );
};

export default Tickets;
