// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/persona.ts";

const getAllPersonas = async (req: Request, res: Response) => {
  const personas = await PersonaModel.find({});

  res.send(personas);
};

export default getAllPersonas;
