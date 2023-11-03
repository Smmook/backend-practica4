// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  if (req.method === "POST") {
    console.log(`Body: ${req.body}`);
  }
  next();
};

export default logger;
