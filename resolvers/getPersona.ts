// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PersonaModel from "../db/persona.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const persona = await PersonaModel.findById(id);
    if (!persona) {
      return res.status(404).send();
    }
    res.send(persona);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
