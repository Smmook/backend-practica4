//@deno-types="npm:@types/express"
import { Request, Response } from "express";

import PlanetaModel from "../db/planeta.ts";
import DimensionModel from "../db/dimension.ts";

const addDimension = async (req: Request, res: Response) => {
  const { nombre, planetas } = req.body;
  if (!nombre || !planetas) {
    return res.status(400).send();
  }

  try {
    const validPlanets = await PlanetaModel.find({ _id: { $in: planetas } });
    if (validPlanets.length !== planetas.length) {
      return res.status(400).send();
    }
    const saved = await new DimensionModel({ nombre, planetas }).save();
    res.status(201).send(saved);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default addDimension;
