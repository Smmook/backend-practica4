// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PersonaModel from "../db/persona.ts";

export default async (req: Request, res: Response) => {
  const { nombre, edad } = req.body;
  const id = req.params.id;
  if (!nombre || !edad) {
    return res.status(400).send();
  }
  try {
    const updated = await PersonaModel.findByIdAndUpdate(id, { nombre, edad }, {
      new: true,
    });
    if (!updated) {
      return res.status(404).send();
    }
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
