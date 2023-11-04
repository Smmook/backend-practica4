// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/persona.ts";
import PlanetaModel from "../db/planeta.ts";

const addPlanet = async (req: Request, res: Response) => {
  const { nombre, personas } = req.body;
  if (!nombre || !personas) {
    return res.status(400).send();
  }
  try {
    const validPeople = await PersonaModel.find({ _id: { $in: personas } })
      .select("_id");
    if (validPeople.length !== personas.length) {
      return res.status(400).send();
    }
    const saved = await new PlanetaModel({ nombre, personas }).save();

    res.status(201).send(saved);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default addPlanet;
