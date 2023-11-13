// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PlanetaModel from "../db/planeta.ts";
import comprobarPersonas from "../utils/comprobarPersonas.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  const { nombre, personas } = req.body;
  if (!nombre || !personas) {
    return res.status(400).send();
  }

  try {
    if (!(await comprobarPersonas(personas))) {
      return res.status(400).send("Alguna persona no es valida.");
    }
    const updated = await PlanetaModel.findByIdAndUpdate(id, {
      nombre,
      personas,
    }, { new: true });
    if (!updated) {
      return res.status(404).send();
    }
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
