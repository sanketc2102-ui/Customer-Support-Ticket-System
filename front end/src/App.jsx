import React, { useEffect, useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketListingTable from "./components/TicketListingTable";
import "./App.css";

// http://localhost:8000/api/tickets

export default function App() {
  const [tickets, setTickets] = useState([]);

  console.log(tickets);

  async function fetchTickets() {
    try {
      const res = await fetch(`http://localhost:8000/api/tickets`);
      const data = await res.json();

      console.log(data);
      setTickets(data.result);
    } catch (err) {
      console.log("something went wrong while fetching tickets", err);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Customer Support Ticket System</h1>

      {/* Ticket Form */}
      <TicketForm setTickets={setTickets} onTicketCreated={fetchTickets} />

      {/* ticket Listing */}
      <TicketListingTable tickets={tickets} />
    </div>
  );
}
