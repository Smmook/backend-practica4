// @deno-types="npm:@types/express"
import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  next();
};

export default logger;
