// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PersonaModel from "../db/persona.ts";

export default async (req: Request, res: Response) => {
  const personas = await PersonaModel.find({});
  res.send(personas);
};
