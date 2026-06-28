import db from "../db/dbConnection.js";

const createTickets = async (req, res, next) => {
  const { customerName, email, category = "general", description } = req.body;

  try {
    const [rows] = await db.execute(
      `
      INSERT INTO tickets (customerName, email, category, description)
      VALUES (?,?,?,?)
      `,
      [customerName, email, category, description],
    );

    const insertId = rows.insertId;

    const [result] = await db.execute(
      `
        SELECT * FROM tickets WHERE id =?
      `,
      [insertId],
    );

    return res.status(201).json({
      success: true,
      message: "ticket is created",
      result: result[0],
    });
  } catch (err) {
    next(err);
  }
};

const getAllTickets = async (req, res, next) => {
  try {
    const [result] = await db.execute(`
        SELECT * FROM tickets
      `);

    return res.status(200).json({
      success: true,
      message: "all tickets fechted",
      result,
    });
  } catch (err) {
    next(err);
  }
};
const updateTicketStatus = async (req, res, next) => {
  const { status } = req.body;
  const { ticketId } = req.params;

  try {
    const [existingTicket] = await db.execute(
      `
        SELECT * FROM tickets WHERE id = ?
      `,
      [ticketId],
    );

    if (existingTicket === 0) {
      return res.status(404).json({
        success: false,
        message: "ticket not found",
      });
    }

    await db.execute(
      `
      UPDATE tickets SET status = ? WHERE id = ?
      `,
      [status, ticketId],
    );

    const [updatedTicket] = await db.execute(
      `
        SELECT * FROM tickets WHERE id = ?
      `,
      [ticketId],
    );

    return res.status(200).json({
      success: true,
      message: "status updated successfully",
      result: updatedTicket[0],
    });
  } catch (err) {
    next(err);
  }
};

export { createTickets, getAllTickets, updateTicketStatus };
