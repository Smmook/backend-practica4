// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/persona.ts";

const addPersona = async (req: Request, res: Response) => {
  const { nombre, edad } = req.body;
  if (!nombre || !edad) {
    return res.status(400).send();
  }
  try {
    const saved = await new PersonaModel({ nombre, edad }).save();
    res.status(201).send(saved);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default addPersona;
