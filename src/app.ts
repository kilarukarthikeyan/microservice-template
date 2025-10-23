import express from "express";
import { router as healthRouter } from "./routes/health";
import { logger } from "./lib/logger";

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Health route
app.use("/health", healthRouter);

export default app;
