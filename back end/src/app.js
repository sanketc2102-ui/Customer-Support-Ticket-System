import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";
import ticketsRouter from "./routes/tickets.routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api/tickets", ticketsRouter);

// global error middleware
app.use(errorHandler);

export default app;
