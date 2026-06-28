import { useState } from "react";

export default function TicketForm({ setTickets, onTicketCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formField = {
        customerName: name,
        email,
        category,
        description,
      };

      const res = await fetch("http://localhost:8000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formField),
      });

      const data = await res.json();

      console.log(data);

      setName("");
      setEmail("");
      setCategory("general");
      setDescription("");

      setTickets((tickets) => [data.result, ...tickets]);
      onTicketCreated();
    } catch (err) {
      console.log("ticket creation failed", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">customer name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="category">category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="payment">payment</option>
            <option value="technical">technical</option>
            <option value="general">general</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
