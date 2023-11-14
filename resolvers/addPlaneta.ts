// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PlanetaModel from "../db/planeta.ts";
import comprobarPersonas from "../utils/comprobarPersonas.ts";

const addPlaneta = async (req: Request, res: Response) => {
  const { nombre, personas } = req.body;
  if (!nombre || !personas) {
    return res.status(400).send();
  }
  try {
    if (await comprobarPersonas(personas)) {
      return res.status(400).send("Alguna persona no es valida.");
    }
    const saved = await new PlanetaModel({ nombre, personas }).save();

    res.status(201).send(saved);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default addPlaneta;
