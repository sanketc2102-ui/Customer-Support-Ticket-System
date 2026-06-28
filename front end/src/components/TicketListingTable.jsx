import { useState } from "react";

export default function TicketListingTable({ tickets }) {
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
              value={ticket.status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Closed</option>
            </select>
          </div>

          <p>{ticket.createdAt}</p>

          <div className="field">
            <label htmlFor="">category</label>
            <select defaultValue={ticket.category}>
              <option value="payment">Billing</option>
              <option value="technical">Technical</option>
              <option value="general">General</option>
            </select>
          </div>
          <button type="submit">edit status</button>
        </div>
      ))}
    </div>
  );
}
