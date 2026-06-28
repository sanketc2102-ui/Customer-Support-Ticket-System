import { Router } from "express";
import {
  createTickets,
  getAllTickets,
  updateTicketStatus,
} from "../controllers/tickets.controllers.js";

const router = Router();

router.route("/").get(getAllTickets).post(createTickets);

router.route("/:ticketId").put(updateTicketStatus);

export default router;
