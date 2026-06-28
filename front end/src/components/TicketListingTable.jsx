import { useState } from "react";

export default function TicketListingTable({ tickets }) {
  const [status, setStatus] = useState(tickets.status);

  const handleStatusChange = async (ticketId) => {
    const res = await fetch(`http://localhost:8000/api/tickets/${ticketId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      {tickets.map((ticket) => (
        <div className="ticket" key={ticket.id}>
          <p>{ticket.id}</p>
          <p>{ticket.customerName}</p>
          <p>{ticket.email}</p>

          <div className="field">
            <label htmlFor="status">status</label>
            <select
              id="status"
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">resolved</option>
            </select>
          </div>

          <p>{ticket.createdAt}</p>

          <div className="field">
            <label htmlFor="category">category</label>
            <select id="category" defaultValue={ticket.category}>
              <option value="payment">Payment</option>
              <option value="technical">Technical</option>
              <option value="general">General</option>
            </select>
          </div>
          <button type="submit" onClick={() => handleStatusChange(ticket.id)}>
            edit status
          </button>
        </div>
      ))}
    </div>
  );
}
