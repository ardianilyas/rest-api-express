import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../utils/validate";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: "Internal server error",
  });
}
