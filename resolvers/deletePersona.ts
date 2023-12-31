// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PersonaModel from "../db/persona.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleted = await PersonaModel.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
