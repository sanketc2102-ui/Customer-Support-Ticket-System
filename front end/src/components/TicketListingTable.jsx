export default function TicketListingTable({ tickets, handleStatusChange }) {
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
              onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <p>{ticket.createdAt}</p>

          <div className="field">
            <label htmlFor="">category</label>
            <select defaultValue={ticket.category}>
              <option value="Billing">Billing</option>
              <option value="Technical">Technical</option>
              <option value="General">General</option>
            </select>
          </div>
          <button type="submit">edit status</button>
        </div>
      ))}
    </div>
  );
}
